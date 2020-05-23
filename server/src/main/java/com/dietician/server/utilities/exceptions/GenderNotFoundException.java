package com.dietician.server.utilities.exceptions;

public class GenderNotFoundException extends RuntimeException {
    public GenderNotFoundException() {
        super("Gender not found");
    }
}
