package com.dietician.server.dtos.requests;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class NutrientsPerPortionRequest {
    @NotNull
    @Min(value = 1, message = "Portion size shouldn't be less than 0")
    private Integer portionSize;

    @NotNull
    @Min(value = 0, message = "Calories shouldn't be less than 0")
    private Integer calories;

    @NotNull
    @Min(value = 0, message = "Carbohydrates shouldn't be less than 0")
    private Integer carbohydrates;

    @NotNull
    @Min(value = 0, message = "Fat shouldn't be less than 0")
    private Integer fat;

    @NotNull
    @Min(value = 0, message = "Proteins shouldn't be less than 0")
    private Integer proteins;

    @NotNull
    private String unit;
}
