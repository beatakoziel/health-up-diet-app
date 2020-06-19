package com.dietician.server.services;

import com.dietician.server.db.entities.Meal;
import com.dietician.server.db.entities.User;
import com.dietician.server.db.repositories.MealRepository;
import com.dietician.server.db.repositories.UserRepository;
import com.dietician.server.dtos.requests.MealRequest;
import com.dietician.server.dtos.responses.MealResponse;
import com.dietician.server.utilities.converters.MealConverter;
import com.dietician.server.utilities.exceptions.MealNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class MealService {

    private final UserRepository userRepository;
    private final UserService userService;
    private final MealRepository mealRepository;
    private final MealConverter mealConverter;

    public Long addMeal(String username, MealRequest request) {
        Meal newMeal = mealRepository.save(mealConverter.convertToEntity(request));
        User user = userService.getUserByUsername(username);
        user.getMeals().add(newMeal);
        userRepository.save(user);
        return newMeal.getId();
    }

    public List<MealResponse> getUserMeals(String username) {
        return userService.getUserByUsername(username).getMeals().stream()
                .map(mealConverter::convertToResponse)
                .collect(Collectors.toList());
    }

    public Long deleteMeal(String username, Long mealId) {
        Meal meal = mealRepository.findById(mealId).orElseThrow(MealNotFoundException::new);
        User user = userService.getUserByUsername(username);
        user.getMeals().remove(meal);
        userRepository.save(user);
        mealRepository.delete(meal);
        return meal.getId();
    }
}
