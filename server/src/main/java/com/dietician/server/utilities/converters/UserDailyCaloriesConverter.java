package com.dietician.server.utilities.converters;

import com.dietician.server.db.entities.FoodDiary;
import com.dietician.server.db.entities.NutrientsPerPortion;
import com.dietician.server.dtos.responses.UserDailyCaloriesSumResponse;
import com.dietician.server.dtos.responses.UserDailyNutrientsResponse;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserDailyCaloriesConverter {

    public UserDailyCaloriesSumResponse convertToResponse(FoodDiary entity) {
        NutrientsPerPortion nutrientsPerPortion = entity.getNutrientsPerPortion();
        UserDailyNutrientsResponse nutrientsPerPortionResponse = UserDailyNutrientsResponse.builder()
                .calories(nutrientsPerPortion.getCalories())
                .carbohydrates(nutrientsPerPortion.getCarbohydrates())
                .fat(nutrientsPerPortion.getFat())
                .proteins(nutrientsPerPortion.getProteins())
                .build();
        return UserDailyCaloriesSumResponse.builder()
                .dailyNutrients(nutrientsPerPortionResponse)
                .waterGlasses(entity.getWaterGlasses())
                .build();
    }

}
