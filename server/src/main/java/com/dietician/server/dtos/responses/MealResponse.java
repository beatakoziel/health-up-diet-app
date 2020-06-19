package com.dietician.server.dtos.responses;

import com.dietician.server.db.entities.ProductsQuantitiesInMeal;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MealResponse {
    private Long id;
    private String name;
    private List<ProductsQuantitiesInMeal> products;
}
