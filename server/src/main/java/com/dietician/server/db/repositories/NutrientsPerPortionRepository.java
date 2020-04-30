package com.dietician.server.db.repositories;

import com.dietician.server.db.entities.NutrientsPerPortion;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NutrientsPerPortionRepository extends JpaRepository<NutrientsPerPortion, Long> {
}
