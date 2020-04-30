package com.dietician.server.db.repositories;

import com.dietician.server.db.entities.Opinion;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OpinionRepository extends JpaRepository<Opinion, Long> {
    List<Opinion> findAllByRecipeId(Long recipeId);
}
