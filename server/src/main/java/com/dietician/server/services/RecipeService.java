package com.dietician.server.services;

import com.dietician.server.db.repositories.RecipeRepository;
import com.dietician.server.dtos.responses.RecipeResponse;
import com.dietician.server.utilities.converters.RecipeConverter;
import com.dietician.server.utilities.exceptions.RecipeNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class RecipeService {

    private final RecipeRepository recipeRepository;
    private final RecipeConverter recipeConverter;

    public List<RecipeResponse> getRecipes() {
        return recipeRepository.findAll().stream()
                .map(recipeConverter::convertToResponse)
                .collect(Collectors.toList());
    }

    public RecipeResponse getRecipeById(Long recipeId) {
        return recipeConverter.convertToResponse(
                recipeRepository.findById(recipeId)
                .orElseThrow(() -> new RecipeNotFoundException(recipeId))
        );
    }
}
