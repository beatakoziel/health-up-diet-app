package com.dietician.server.db.repositories;

import com.dietician.server.db.entities.UserGoalData;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDataRepository extends JpaRepository<UserGoalData, Long> {
}
