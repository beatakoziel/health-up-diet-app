package com.dietician.server.dtos.requests;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProductsQuantitiesInMealRequest {
    @NotNull
    private int quantity;

    private Long productId;
}
