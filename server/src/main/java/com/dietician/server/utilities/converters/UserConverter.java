package com.dietician.server.utilities.converters;

import com.dietician.server.db.entities.User;
import com.dietician.server.db.enums.UserRole;
import com.dietician.server.db.repositories.UserRepository;
import com.dietician.server.dtos.requests.BasicLoginRequest;
import com.dietician.server.dtos.responses.UserResponse;
import com.dietician.server.utilities.exceptions.UserAlreadyExistsException;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserConverter {

    private final UserRepository userRepository;

    public User covertToEntity(BasicLoginRequest request) {
        userRepository.findByEmail(request.getEmail())
                .ifPresent(user -> {
                    throw new UserAlreadyExistsException(request.getEmail());
                });
        PasswordEncoder encoder = new BCryptPasswordEncoder();
        return User.builder()
                .email(request.getEmail())
                .password(encoder.encode(request.getPassword()))
                .blocked(false)
                .role(UserRole.USER)
                .build();
    }

    public UserResponse convertToResponse(User user) {
        return UserResponse.builder()
                .id(user.getId())
                .email(user.getEmail())
                .blocked(user.isBlocked())
                .role(user.getRole())
                .build();
    }
}
