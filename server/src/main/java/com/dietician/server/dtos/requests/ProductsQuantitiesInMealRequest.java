package com.dietician.server.dtos.requests;

import lombok.Builder;

import javax.validation.constraints.NotNull;

@Builder
public class ProductsQuantitiesInMealRequest {
    @NotNull
    private final int quantity;

    private final Long productId;
}
