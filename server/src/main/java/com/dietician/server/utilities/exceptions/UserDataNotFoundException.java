package com.dietician.server.utilities.exceptions;

public class UserDataNotFoundException extends RuntimeException {
    public UserDataNotFoundException(Long userDataId) {
        super(String.format("User data with id %s not found", userDataId));
    }

    public UserDataNotFoundException() {
        super("User data not found");
    }
}
