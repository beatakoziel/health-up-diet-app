package com.dietician.server.db.repositories;

import com.dietician.server.db.entities.BurnedCaloriesDiary;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BurnedCaloriesDiaryRepository extends JpaRepository<BurnedCaloriesDiary, Long> {
}
