package com.dietician.server.utilities.exceptions;

public class UserDataNotFoundException extends RuntimeException {
    public UserDataNotFoundException() {
        super("User data not found");
    }
}
