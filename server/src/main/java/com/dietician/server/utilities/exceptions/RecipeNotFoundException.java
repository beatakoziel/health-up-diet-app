package com.dietician.server.utilities.exceptions;

public class RecipeNotFoundException extends RuntimeException {
    public RecipeNotFoundException(Long recipeId) {
        super(String.format("Recipe with id %s not found", recipeId));
    }
}
