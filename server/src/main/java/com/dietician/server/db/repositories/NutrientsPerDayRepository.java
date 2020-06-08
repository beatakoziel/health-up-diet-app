package com.dietician.server.db.repositories;

import com.dietician.server.db.entities.NutrientsPerDay;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NutrientsPerDayRepository extends JpaRepository<NutrientsPerDay, Long> {
}
