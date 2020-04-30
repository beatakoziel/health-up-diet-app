package com.dietician.server.db.repositories;

import com.dietician.server.db.entities.Meal;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MealRepository extends JpaRepository<Meal, Long> {
}
