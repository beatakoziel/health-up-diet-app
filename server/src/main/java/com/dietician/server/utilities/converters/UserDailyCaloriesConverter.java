package com.dietician.server.utilities.converters;

import com.dietician.server.db.entities.FoodDiary;
import com.dietician.server.db.entities.NutrientsPerPortion;
import com.dietician.server.dtos.responses.NutrientsPerPortionResponse;
import com.dietician.server.dtos.responses.UserDailyCaloriesSumResponse;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserDailyCaloriesConverter {

    public UserDailyCaloriesSumResponse convertToResponse(FoodDiary entity) {
        NutrientsPerPortion nutrientsPerPortion = entity.getNutrientsPerPortion();
        NutrientsPerPortionResponse nutrientsPerPortionResponse = NutrientsPerPortionResponse.builder()
                .portionSize(nutrientsPerPortion.getPortionSize())
                .calories(nutrientsPerPortion.getCalories())
                .carbohydrates(nutrientsPerPortion.getCarbohydrates())
                .fat(nutrientsPerPortion.getFat())
                .proteins(nutrientsPerPortion.getProteins())
                .unit(nutrientsPerPortion.getUnit().getLabel())
                .build();
        return UserDailyCaloriesSumResponse.builder()
                .dailyNutrients(nutrientsPerPortionResponse)
                .waterGlasses(entity.getWaterGlasses())
                .build();
    }

}
