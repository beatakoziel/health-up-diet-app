package com.dietician.server.dtos.responses;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class NutrientsPerPortionResponse {
    private Integer portionSize;
    private Integer calories;
    private Float carbohydrates;
    private Float fat;
    private Float proteins;
    private String unit;
}