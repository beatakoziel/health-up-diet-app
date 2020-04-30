package com.dietician.server.utilities.exceptions;

public class ProductNotFoundException extends RuntimeException {
    public ProductNotFoundException(Long productId) {
        super(String.format("Product with id %s not found", productId));
    }
}
