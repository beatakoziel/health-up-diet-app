package com.dietician.server.db.enums;

import com.dietician.server.utilities.exceptions.CategoryNotFoundException;
import lombok.Getter;

import java.util.Arrays;

public enum PortionUnit {
    MILLILITERS("Mililitry"),
    GRAMS("Gramy");

    @Getter
    private final String label;

    PortionUnit(String label) {
        this.label = label;
    }

    public static PortionUnit getByLabel(String label) {
        return Arrays.stream(PortionUnit.values())
                .filter(unit -> unit.getLabel().equalsIgnoreCase(label))
                .findFirst()
                .orElseThrow(CategoryNotFoundException::new);
    }
}
