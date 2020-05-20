package com.dietician.server.services;

import com.dietician.server.dtos.PaymentDto;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.paypal.api.payments.*;
import com.paypal.base.rest.APIContext;
import com.paypal.base.rest.PayPalRESTException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Arrays;

@Service
public class PaymentServiceImpl implements PaymentService {

    private final APIContext apiContext;

    @Autowired
    public PaymentServiceImpl(APIContext apiContext) {
        this.apiContext = apiContext;
    }

    @Value("${paypal.client.cancelUrl}")
    private String cancelUrl;

    @Value("${paypal.client.returnUrl}")
    private String returnUrl;

    @Override
    public ResponseEntity<String> createPayment(String username, PaymentDto paymentDto) throws JsonProcessingException, PayPalRESTException {

        //CHECK THIS USER BY USERNAME
        //IF USER HAS SUPER THROW ERROR
        //ELSE GO ...
        Transaction transaction = createTransaction(username, paymentDto);

        Payer payer = new Payer();
        payer.setPaymentMethod("paypal");

        RedirectUrls redirectUrls = new RedirectUrls();
        redirectUrls.setCancelUrl(cancelUrl);
        redirectUrls.setReturnUrl(returnUrl);

        Payment payment = new Payment();
        payment.setIntent("sale");
        payment.setPayer(payer);
        payment.setTransactions(Arrays.asList(transaction));
        payment.setRedirectUrls(redirectUrls);

        Payment readyPayment = payment.create(apiContext);
        System.out.println(readyPayment);

        for (Links link : readyPayment.getLinks()) {
            if (link.getRel().equals("approval_url")) {
                return ResponseEntity.ok(link.getHref());
            }
        }
        return ResponseEntity.badRequest().build();
    }

    @Override
    public ResponseEntity<String> executePayment(String paymentId, String payerId) throws PayPalRESTException, JsonProcessingException {
        Payment payment = new Payment();
        payment.setId(paymentId);
        PaymentExecution paymentExecute = new PaymentExecution();
        paymentExecute.setPayerId(payerId);
        Payment result;
        try {
            result = payment.execute(apiContext, paymentExecute);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Wystąpił bład, spróbuj ponownie później");
        }
        if (result.getState().equals("approved")) {
            String username = result.getTransactions().get(0).getDescription();

            //FIND USER BY USERNAME
            //SET USER ROLE AS USER_PREMIUM
            //SAVE USER

            return ResponseEntity.ok("Płatność została zrealizowana");
        }
        return ResponseEntity.badRequest().body("Wystąpił bład, spróbuj ponownie później");
    }

    private Transaction createTransaction(String username, PaymentDto paymentDto) throws JsonProcessingException {

        Transaction transaction = new Transaction();

        transaction.setDescription(username);
        transaction.setAmount(new Amount("PLN", paymentDto.getTotalPrice()));
        return transaction;
    }
}
