package com.dietician.server.utilities.exceptions;

public class MealNotFoundException extends RuntimeException {
    public MealNotFoundException() {
        super("Meal not found");
    }
}
