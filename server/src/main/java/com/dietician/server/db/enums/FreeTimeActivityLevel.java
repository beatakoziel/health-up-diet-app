package com.dietician.server.db.enums;

import com.dietician.server.utilities.exceptions.ActivityLevelNotFoundException;
import com.dietician.server.utilities.exceptions.GoalNotFoundException;
import lombok.Getter;

import java.util.Arrays;

public enum FreeTimeActivityLevel {
    VERY_LOW("Bardzo niski"),
    LOW("Niski"),
    MEDIUM("Średni"),
    HIGH("Wysoki"),
    VERY_HIGH("Bardzo wysoki");

    @Getter
    private final String label;

    FreeTimeActivityLevel(String label) {
        this.label = label;
    }

    public static FreeTimeActivityLevel getByLabel(String label) {
        return Arrays.stream(FreeTimeActivityLevel.values())
                .filter(activityLevel -> activityLevel.getLabel().equalsIgnoreCase(label))
                .findFirst()
                .orElseThrow(ActivityLevelNotFoundException::new);
    }
}
