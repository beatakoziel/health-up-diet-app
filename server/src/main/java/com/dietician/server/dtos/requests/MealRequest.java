package com.dietician.server.dtos.requests;

import javax.validation.constraints.NotNull;
import java.util.List;

public class MealRequest {
    @NotNull
    private String name;

    private List<ProductsQuantitiesInMealRequest> productsWithQuantities;
}
