package com.dietician.server.utilities.converters;

import com.dietician.server.db.entities.FoodDiary;
import com.dietician.server.db.entities.NutrientsPerPortion;
import com.dietician.server.dtos.responses.ConsumptionProductResponse;
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
        NutrientsPerPortionResponse nutrientsResponse = getCalculatedProductNutrients(foodDiary, productNutrients, quantity);
        return ProductResponse.builder()
                .id(foodDiary.getId())
                .name(foodDiary.getProduct().getName())
                .category(foodDiary.getProduct().getCategory().getLabel())
                .nutrientsPerPortion(nutrientsResponse)
                .build();
    }

    public ConsumptionProductResponse convertToConsumption(FoodDiary foodDiary) {
        NutrientsPerPortion productNutrients = foodDiary.getProduct().getStandardPortionNutrients();
        int quantity = foodDiary.getProductPortion();
        NutrientsPerPortionResponse nutrientsResponse = getCalculatedProductNutrients(foodDiary, productNutrients, quantity);
        return ConsumptionProductResponse.builder()
                .consumptionId(foodDiary.getId())
                .productId(foodDiary.getProduct().getId())
                .name(foodDiary.getProduct().getName())
                .category(foodDiary.getProduct().getCategory().getLabel())
                .nutrientsPerPortion(nutrientsResponse)
                .build();
    }

    private NutrientsPerPortionResponse getCalculatedProductNutrients(FoodDiary foodDiary, NutrientsPerPortion productNutrients, int quantity) {
        return NutrientsPerPortionResponse.builder()
                .portionSize(foodDiary.getProductPortion())
                .calories(((productNutrients.getCalories() * quantity) / productNutrients.getPortionSize()))
                .proteins(((productNutrients.getProteins() * quantity) / productNutrients.getPortionSize()))
                .fat(((productNutrients.getFat() * quantity) / productNutrients.getPortionSize()))
                .carbohydrates(((productNutrients.getCarbohydrates() * quantity) / productNutrients.getPortionSize()))
                .unit(productNutrients.getUnit().getLabel())
                .build();
    }

}
