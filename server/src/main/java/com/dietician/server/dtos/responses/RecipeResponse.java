package com.dietician.server.dtos.responses;

import com.dietician.server.db.entities.ProductQuantitiesInRecipe;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RecipeResponse {
    private Long id;
    private String name;
    private String imageUrl;
    private String description;
    private List<ProductQuantitiesInRecipe> productQuantityList;
}
