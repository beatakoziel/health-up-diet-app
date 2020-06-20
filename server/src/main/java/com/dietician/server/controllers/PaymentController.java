package com.dietician.server.controllers;

import com.dietician.server.db.entities.User;
import com.dietician.server.dtos.requests.PaymentDto;
import com.dietician.server.services.PaymentService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.paypal.base.rest.PayPalRESTException;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("pay")
@AllArgsConstructor
@CrossOrigin
public class PaymentController {

    PaymentService paymentService;

    @PostMapping()
    public ResponseEntity<String> payment(Authentication authentication, @RequestBody PaymentDto paymentDto) throws PayPalRESTException, JsonProcessingException {
        return paymentService.createPayment(getUsernameFromAuthentication(authentication), paymentDto);
    }

    @GetMapping("/{paymentId}/{PayerID}")
    public ResponseEntity<String> successPay(@PathVariable("paymentId") String paymentId, @PathVariable("PayerID") String payerId) throws PayPalRESTException, JsonProcessingException {
        return paymentService.executePayment(paymentId, payerId);
    }

    private String getUsernameFromAuthentication(Authentication authentication) {
        return ((User) authentication.getPrincipal()).getUsername();
    }

}
