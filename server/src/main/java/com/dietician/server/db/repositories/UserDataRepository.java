package com.dietician.server.db.repositories;

import com.dietician.server.db.entities.UserData;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDataRepository extends JpaRepository<UserData, Long> {
}
