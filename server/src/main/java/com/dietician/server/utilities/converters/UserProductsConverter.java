package com.dietician.server.utilities.converters;

import com.dietician.server.db.entities.FoodDiary;
import com.dietician.server.db.entities.NutrientsPerPortion;
import com.dietician.server.dtos.responses.NutrientsPerPortionResponse;
import com.dietician.server.dtos.responses.ProductResponse;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserProductsConverter {

    public ProductResponse convertToResponse(FoodDiary foodDiary) {
        NutrientsPerPortion productNutrients = foodDiary.getProduct().getStandardPortionNutrients();
        int quantity = foodDiary.getProductPortion();
        NutrientsPerPortionResponse nutrientsResponse = NutrientsPerPortionResponse.builder()
                .portionSize(foodDiary.getProductPortion())
                .calories(((productNutrients.getCalories() * quantity) / productNutrients.getPortionSize()))
                .proteins(((productNutrients.getProteins() * quantity) / productNutrients.getPortionSize()))
                .fat(((productNutrients.getFat() * quantity) / productNutrients.getPortionSize()))
                .carbohydrates(((productNutrients.getCarbohydrates() * quantity) / productNutrients.getPortionSize()))
                .unit(productNutrients.getUnit().getLabel())
                .build();
        return ProductResponse.builder()
                .id(foodDiary.getId())
                .name(foodDiary.getProduct().getName())
                .category(foodDiary.getProduct().getCategory().getLabel())
                .nutrientsPerPortion(nutrientsResponse)
                .build();
    }

}
