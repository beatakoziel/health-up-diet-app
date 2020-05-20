package com.dietician.server.dtos.requests;

import lombok.AllArgsConstructor;

import javax.validation.constraints.Max;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@AllArgsConstructor
public class RecipeRequest {
    @NotNull
    private final Long mealId;

    @NotNull
    @NotBlank
    @Max(value = 20000, message = "Description should be less than 20 000")
    private final String description;
}
