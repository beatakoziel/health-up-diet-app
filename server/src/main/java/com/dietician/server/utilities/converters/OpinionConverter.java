package com.dietician.server.utilities.converters;

import com.dietician.server.db.entities.Opinion;
import com.dietician.server.db.repositories.RecipeRepository;
import com.dietician.server.db.repositories.UserRepository;
import com.dietician.server.dtos.requests.OpinionRequest;
import com.dietician.server.utilities.exceptions.RecipeNotFoundException;
import com.dietician.server.utilities.exceptions.UserNotFoundException;
import com.dietician.server.utilities.exceptions.WrongRateException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class OpinionConverter {

    private final UserRepository userRepository;
    private final RecipeRepository recipeRepository;

    public Opinion convertToEntity(OpinionRequest request) {
        if (request.getRate() < 1 || request.getRate() > 5)
            throw new WrongRateException();
        return Opinion.builder()
                .rate(request.getRate())
                .description(request.getDescription())
                .recipe(recipeRepository.findById(request.getRecipeId())
                        .orElseThrow(() -> new RecipeNotFoundException(request.getRecipeId()))
                )
                .user(userRepository.findById(request.getUserId())
                        .orElseThrow(() -> new UserNotFoundException(request.getUserId()))
                )
                .build();
    }
}
