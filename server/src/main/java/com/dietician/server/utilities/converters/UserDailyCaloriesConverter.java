package com.dietician.server.utilities.converters;

import com.dietician.server.db.entities.FoodDiary;
import com.dietician.server.db.entities.NutrientsPerDay;
import com.dietician.server.dtos.responses.UserDailyCaloriesSumResponse;
import com.dietician.server.dtos.responses.UserDailyNutrientsResponse;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserDailyCaloriesConverter {

    public UserDailyCaloriesSumResponse convertToResponse(FoodDiary entity) {
        NutrientsPerDay nutrientsPerDay = entity.getNutrientsPerDay();
        UserDailyNutrientsResponse nutrientsPerPortionResponse = UserDailyNutrientsResponse.builder()
                .calories(nutrientsPerDay.getCalories())
                .carbohydrates(nutrientsPerDay.getCarbohydrates())
                .fat(nutrientsPerDay.getFat())
                .proteins(nutrientsPerDay.getProteins())
                .build();
        return UserDailyCaloriesSumResponse.builder()
                .dailyNutrients(nutrientsPerPortionResponse)
                .waterGlasses(entity.getWaterGlasses())
                .build();
    }

}
