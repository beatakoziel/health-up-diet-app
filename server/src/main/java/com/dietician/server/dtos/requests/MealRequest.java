package com.dietician.server.dtos.requests;

import lombok.Getter;

import javax.validation.constraints.NotNull;
import java.util.List;

@Getter
public class MealRequest {
    @NotNull
    private String name;

    private List<ProductsQuantitiesInMealRequest> products;
}
