package com.dietician.server.services;

import com.dietician.server.dtos.PaymentDto;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.paypal.base.rest.PayPalRESTException;
import org.springframework.http.ResponseEntity;

public interface PaymentService {
    ResponseEntity<String> createPayment(String username, PaymentDto paymentDto) throws JsonProcessingException, PayPalRESTException;

    ResponseEntity<String> executePayment(String paymentId, String payerId) throws PayPalRESTException, JsonProcessingException;
}
