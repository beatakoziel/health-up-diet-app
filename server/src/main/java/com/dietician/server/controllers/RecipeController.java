package com.dietician.server.controllers;

import com.dietician.server.dtos.responses.RecipeResponse;
import com.dietician.server.services.RecipeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("recipes")
@RequiredArgsConstructor
public class RecipeController {

    private final RecipeService recipeService;

    @GetMapping(produces = "application/json")
    public ResponseEntity<List<RecipeResponse>> getRecipes() {
        return ResponseEntity.ok(recipeService.getRecipes());
    }

}
