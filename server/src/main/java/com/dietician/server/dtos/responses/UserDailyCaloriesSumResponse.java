package com.dietician.server.dtos.responses;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserDailyCaloriesSumResponse {
    private int waterGlasses;
    private UserDailyNutrientsResponse dailyNutrients;
}
