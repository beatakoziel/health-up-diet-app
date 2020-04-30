package com.dietician.server.services;

import com.dietician.server.db.entities.Opinion;
import com.dietician.server.db.repositories.OpinionRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class OpinionService {

    private final OpinionRepository opinionRepository;

    public Long addOpinion(Opinion opinion) {
        return opinionRepository.save(opinion).getId();
    }

    public List<Opinion> getOpinionsByRecipeId(Long recipeId) {
        return opinionRepository.findAllByRecipeId(recipeId);
    }
}
