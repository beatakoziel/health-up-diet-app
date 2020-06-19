package com.dietician.server.utilities.converters;

import com.dietician.server.db.entities.Recipe;
import com.dietician.server.dtos.responses.RecipeResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class RecipeConverter {

    public RecipeResponse convertToResponse(Recipe recipe) {
        return RecipeResponse.builder()
                .id(recipe.getId())
                .name(recipe.getName())
                .imageUrl(recipe.getPhoto())
                .description(recipe.getDescription())
                .productQuantityList(recipe.getProductQuantityList())
                .build();
    }
}
