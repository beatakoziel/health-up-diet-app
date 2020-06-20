package com.dietician.server.utilities.exceptions;

import javax.validation.constraints.NotNull;

public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(@NotNull String email) {
        super(String.format("User with email %s not found", email));
    }
}
