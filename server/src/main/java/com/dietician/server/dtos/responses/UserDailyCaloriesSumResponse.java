package com.dietician.server.dtos.responses;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserDailyCaloriesSumResponse {
    private int waterGlasses;
    private NutrientsPerPortionResponse dailyNutrients;
}
