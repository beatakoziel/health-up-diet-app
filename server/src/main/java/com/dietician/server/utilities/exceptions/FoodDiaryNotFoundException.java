package com.dietician.server.utilities.exceptions;

public class FoodDiaryNotFoundException extends RuntimeException {
    public FoodDiaryNotFoundException() {
        super("Food diary not found");
    }
}