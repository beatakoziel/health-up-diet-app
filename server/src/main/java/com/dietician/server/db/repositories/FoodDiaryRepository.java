package com.dietician.server.db.repositories;

import com.dietician.server.db.entities.FoodDiary;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FoodDiaryRepository extends JpaRepository<FoodDiary, Long> {
}
