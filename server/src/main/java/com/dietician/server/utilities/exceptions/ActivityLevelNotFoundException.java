package com.dietician.server.utilities.exceptions;

public class ActivityLevelNotFoundException extends RuntimeException {
    public ActivityLevelNotFoundException() {
        super("Activity level not found");
    }
}
