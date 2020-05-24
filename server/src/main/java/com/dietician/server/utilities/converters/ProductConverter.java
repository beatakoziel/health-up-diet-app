package com.dietician.server.utilities.converters;

import com.dietician.server.db.entities.NutrientsPerPortion;
import com.dietician.server.db.entities.Product;
import com.dietician.server.db.enums.Category;
import com.dietician.server.db.enums.PortionUnit;
import com.dietician.server.db.repositories.NutrientsPerPortionRepository;
import com.dietician.server.dtos.requests.NutrientsPerPortionRequest;
import com.dietician.server.dtos.requests.ProductRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ProductConverter {

    private final NutrientsPerPortionRepository nutrientsRepository;

    public Product convertToEntity(ProductRequest request) {
        NutrientsPerPortionRequest nutrientsRequest = request.getNutrientsPerPortion();
        NutrientsPerPortion nutrients = NutrientsPerPortion.builder()
                .portionSize(nutrientsRequest.getPortionSize())
                .calories(calculatePerOneHundredGrams(
                        nutrientsRequest.getPortionSize(),
                        nutrientsRequest.getCalories()))
                .carbohydrates(calculatePerOneHundredGrams(
                        nutrientsRequest.getPortionSize(),
                        nutrientsRequest.getCarbohydrates()))
                .proteins(calculatePerOneHundredGrams(
                        nutrientsRequest.getPortionSize(),
                        nutrientsRequest.getProteins()))
                .fat(calculatePerOneHundredGrams(
                        nutrientsRequest.getPortionSize(),
                        nutrientsRequest.getFat()))
                .unit(PortionUnit.getByLabel(nutrientsRequest.getUnit()))
                .build();

        return Product.builder()
                .name(request.getName())
                .category(Category.getByLabel(request.getCategory()))
                .standardPortionNutrients(nutrients)
                .build();
    }

    private int calculatePerOneHundredGrams(int gramsBefore, int valueToCalculate) {
        if (gramsBefore > 0) {
            return (100 * valueToCalculate) / gramsBefore;
        } else throw new ArithmeticException();
    }
}
