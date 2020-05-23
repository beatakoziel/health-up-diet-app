package com.dietician.server.db.enums;

import com.dietician.server.utilities.exceptions.GenderNotFoundException;
import lombok.Getter;

import java.util.Arrays;

public enum Gender {
    MAN("Mężczyzna"),
    WOMAN("Kobieta");

    @Getter
    private final String label;

    Gender(String label) {
        this.label = label;
    }

    public static Gender getByLabel(String label) {
        return Arrays.stream(Gender.values())
                .filter(gender -> gender.getLabel().equalsIgnoreCase(label))
                .findFirst()
                .orElseThrow(GenderNotFoundException::new);
    }
}
