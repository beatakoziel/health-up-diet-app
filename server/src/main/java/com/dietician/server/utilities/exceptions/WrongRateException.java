package com.dietician.server.utilities.exceptions;

public class WrongRateException extends RuntimeException {
    public WrongRateException() {
        super("Rate should be between 1 and 5");
    }
}
