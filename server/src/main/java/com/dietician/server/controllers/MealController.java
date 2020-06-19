package com.dietician.server.controllers;

import com.dietician.server.db.entities.User;
import com.dietician.server.dtos.requests.MealRequest;
import com.dietician.server.dtos.responses.MealResponse;
import com.dietician.server.services.MealService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("meals")
@AllArgsConstructor
@CrossOrigin
public class MealController {

    private final MealService mealService;

    @PostMapping
    public ResponseEntity<Long> addMeal(Authentication authentication, @RequestBody @Valid MealRequest request) {
        return ResponseEntity.ok(mealService.addMeal(getUsernameFromAuthentication(authentication), request));
    }

    @GetMapping(produces = "application/json")
    public ResponseEntity<List<MealResponse>> getUserMeals(Authentication authentication) {
        return ResponseEntity.ok(mealService.getUserMeals(getUsernameFromAuthentication(authentication)));
    }

    @DeleteMapping(value = "/{mealId}")
    public ResponseEntity<Long> deleteUserMeal(Authentication authentication, @PathVariable Long mealId) {
        return ResponseEntity.ok(mealService.deleteMeal(getUsernameFromAuthentication(authentication), mealId));
    }

    private String getUsernameFromAuthentication(Authentication authentication) {
        return ((User) authentication.getPrincipal()).getUsername();
    }
}
