package com.dietician.server.utilities.converters;

import com.dietician.server.db.entities.Meal;
import com.dietician.server.db.entities.Product;
import com.dietician.server.db.entities.ProductsQuantitiesInMeal;
import com.dietician.server.db.repositories.ProductRepository;
import com.dietician.server.dtos.requests.MealRequest;
import com.dietician.server.dtos.requests.ProductsQuantitiesInMealRequest;
import com.dietician.server.dtos.responses.ProductListStructure;
import com.dietician.server.dtos.responses.MealResponse;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class MealConverter {

    private final ProductRepository productRepository;

    public Meal convertToEntity(MealRequest request) {
        List<ProductsQuantitiesInMeal> listOfProducts = request.getProducts().stream()
                .map(this::convertProductQuantitiesToEntity)
                .collect(Collectors.toList());
        return Meal.builder()
                .name(request.getName())
                .products(listOfProducts)
                .build();
    }

    private ProductsQuantitiesInMeal convertProductQuantitiesToEntity(ProductsQuantitiesInMealRequest request) {
        return ProductsQuantitiesInMeal.builder()
                .quantity(request.getQuantity())
                .product(productRepository.getOne(request.getProductId()))
                .build();
    }

    public MealResponse convertToResponse(Meal meal) {
        List<ProductListStructure> listOfProducts = meal.getProducts().stream()
                .map(this::convertMealsToProductListStructure)
                .collect(Collectors.toList());
        return MealResponse.builder()
                .mealId(meal.getId())
                .name(meal.getName())
                .products(listOfProducts)
                .build();
    }

    private ProductListStructure convertMealsToProductListStructure(ProductsQuantitiesInMeal product){
        return ProductListStructure.builder()
                .name(product.getProduct().getName())
                .unit(product.getProduct().getStandardPortionNutrients().getUnit())
                .quantity(product.getQuantity())
                .build();
    }
}
