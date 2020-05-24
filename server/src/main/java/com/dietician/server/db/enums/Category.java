package com.dietician.server.db.enums;

import com.dietician.server.utilities.exceptions.CategoryNotFoundException;
import lombok.Getter;

import java.util.Arrays;

public enum Category {
    SWEETS("Słodycze"),
    SAUCES_AND_DRESSINGS("Sosy i dressingi"),
    FAST_FOOD("Fastfood"),
    PASTA("Makarony"),
    MEAT("Mięso"),
    DAIRY("Nabiał"),
    ALCOHOL("Alkohol"),
    SOFT_DRINKS("Napoje"),
    OILS_AND_FATS("Oleje i tłuszcze"),
    NUTS_AND_SEEDS("Orzechy i nasiona"),
    FRUITS("Owoce"),
    CEREALS_AND_MUESLI("Płatki i muesli"),
    SOY_PRODUCTS("Produkty sojowe"),
    VEGETABLES("Warzywa"),
    FISH("Ryby"),
    BAKING_PRODUCTS("Produkty do pieczenia"),
    GRAIN_PRODUCTS("Produkty zbożowe");

    @Getter
    private final String label;

    Category(String label) {
        this.label = label;
    }

    public static Category getByLabel(String label) {
        return Arrays.stream(Category.values())
                .filter(category -> category.getLabel().equalsIgnoreCase(label))
                .findFirst()
                .orElseThrow(CategoryNotFoundException::new);
    }
}
