package com.dietician.server.utilities.exceptions;

public class GoalNotFoundException extends RuntimeException {
    public GoalNotFoundException() {
        super("Goal not found");
    }
}
