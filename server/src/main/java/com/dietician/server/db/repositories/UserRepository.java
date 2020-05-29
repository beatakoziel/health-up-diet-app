package com.dietician.server.db.repositories;

import com.dietician.server.db.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);

    Optional<User> findByFacebookUserId(String facebookUserId);
}
