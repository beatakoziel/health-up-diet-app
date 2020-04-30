package com.dietician.server.utilities.converters;

import com.dietician.server.db.entities.NutrientsPerPortion;
import com.dietician.server.db.entities.Product;
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
                .calories(nutrientsRequest.getCalories())
                .carbohydrates(nutrientsRequest.getCarbohydrates())
                .proteins(nutrientsRequest.getProteins())
                .fat(nutrientsRequest.getFat())
                .unit(nutrientsRequest.getUnit())
                .build();

        return Product.builder()
                .name(request.getName())
                .category(request.getCategory())
                .standardPortionNutrients(nutrients)
                .build();
    }
}
