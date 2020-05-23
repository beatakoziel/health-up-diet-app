package com.dietician.server.db.enums;

import com.dietician.server.utilities.exceptions.ActivityLevelNotFoundException;
import lombok.Getter;

import java.util.Arrays;

public enum WorkActivityLevel {
    VERY_LOW("Bardzo niski"),
    LOW("Niski"),
    MEDIUM("Średni"),
    HIGH("Wysoki");

    @Getter
    private final String label;

    WorkActivityLevel(String label) {
        this.label = label;
    }

    public static WorkActivityLevel getByLabel(String label) {
        return Arrays.stream(WorkActivityLevel.values())
                .filter(activityLevel -> activityLevel.getLabel().equalsIgnoreCase(label))
                .findFirst()
                .orElseThrow(ActivityLevelNotFoundException::new);
    }

}
