package com.dietician.server.services;

import com.dietician.server.db.entities.User;
import com.dietician.server.db.entities.UserGoalData;
import com.dietician.server.db.enums.Gender;
import com.dietician.server.db.enums.Goal;
import com.dietician.server.db.repositories.UserDataRepository;
import com.dietician.server.db.repositories.UserRepository;
import com.dietician.server.utilities.exceptions.UserNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserDataService {

    private static final int ADDITIONAL_CALORIES_TO_KEEP_WEIGHT = 400;
    private static final int ADDITIONAL_CALORIES_TO_BUILD_MASS = 800;
    private static final int PROTEIN_CALORIES_PER_GRAM = 4;
    private static final int FAT_CALORIES_PER_GRAM = 9;
    private final UserDataRepository userDataRepository;
    private final UserRepository userRepository;
    private final float[][] activityMatrix = {
            {1.0f, 1.07f, 1.15f, 1.21f},
            {1.06f, 1.15f, 1.23f, 1.29f},
            {1.12f, 1.23f, 1.3f, 1.37f},
            {1.18f, 1.31f, 1.39f, 1.45f},
            {1.3f, 1.4f, 1.5f, 1.6f}
    };

    public Long addUserData(String username, UserGoalData userGoalData) {
        User user = userRepository.findByEmail(username)
                .orElseThrow(() -> new UserNotFoundException(username));
        UserGoalData userGoalDataWithNutrients = getUserDataWithCalculatedNutrients(userGoalData);
        userDataRepository.save(userGoalDataWithNutrients);
        user.setUserGoal(userGoalData);
        return userRepository.save(user).getId();
    }

    private UserGoalData getUserDataWithCalculatedNutrients(UserGoalData userGoalData) {
        float activityCoefficient = getActivityCoefficientFromMatrix(userGoalData);
        int caloriesOnLoseWeight = (int) (userGoalData.getWeight() * 26 * activityCoefficient);
        int calories = calculateCalories(userGoalData, caloriesOnLoseWeight);
        userGoalData.setCalories(calories);
        int fatInGrams = (int) ((0.25 * calories) / 9);
        int proteinsInGrams = (int) (activityCoefficient * userGoalData.getWeight());
        if (userGoalData.getGender().equals(Gender.WOMAN))
            proteinsInGrams *= 1.3;
        else proteinsInGrams *= 1.6;
        int carbohydratesInGrams =
                (calories - (fatInGrams * FAT_CALORIES_PER_GRAM) - (proteinsInGrams * PROTEIN_CALORIES_PER_GRAM)) / 4;
        userGoalData.setFat(fatInGrams);
        userGoalData.setProteins(proteinsInGrams);
        userGoalData.setCarbohydrates(carbohydratesInGrams);
        return userGoalData;
    }

    private int calculateCalories(UserGoalData userGoalData, int caloriesOnLoseWeight) {
        int calories;
        if (userGoalData.getGender().equals(Gender.WOMAN))
            caloriesOnLoseWeight *= 0.9;
        if (userGoalData.getGoal().equals(Goal.LOSE_WEIGHT))
            calories = caloriesOnLoseWeight;
        else if (userGoalData.getGoal().equals(Goal.BUILD_MASS))
            calories = caloriesOnLoseWeight + ADDITIONAL_CALORIES_TO_BUILD_MASS;
        else calories = caloriesOnLoseWeight + ADDITIONAL_CALORIES_TO_KEEP_WEIGHT;
        return calories;
    }

    private float getActivityCoefficientFromMatrix(UserGoalData userGoalData) {
        return activityMatrix[userGoalData.getFreeTimeActivityLevel().ordinal()][userGoalData.getWorkActivityLevel().ordinal()];
    }
}
