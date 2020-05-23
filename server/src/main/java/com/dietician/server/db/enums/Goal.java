package com.dietician.server.db.enums;

import com.dietician.server.utilities.exceptions.GoalNotFoundException;
import lombok.Getter;

import java.util.Arrays;

public enum Goal {
    LOSE_WEIGHT("Redukowanie"),
    KEEP_WEIGHT("Utrzymanie"),
    BUILD_MASS("Budowanie");

    @Getter
    private final String label;

    Goal(String label) {
        this.label = label;
    }

    public static Goal getByLabel(String label) {
        return Arrays.stream(Goal.values())
                .filter(goal -> goal.getLabel().equalsIgnoreCase(label))
                .findFirst()
                .orElseThrow(GoalNotFoundException::new);
    }
}
