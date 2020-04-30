package com.dietician.server.db.repositories;

import com.dietician.server.db.entities.GymDiary;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GymDiaryRepository extends JpaRepository<GymDiary, Long> {
}
