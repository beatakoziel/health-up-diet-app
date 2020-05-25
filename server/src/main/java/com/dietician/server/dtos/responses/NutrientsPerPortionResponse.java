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
    private Integer carbohydrates;
    private Integer fat;
    private Integer proteins;
    private String unit;
}