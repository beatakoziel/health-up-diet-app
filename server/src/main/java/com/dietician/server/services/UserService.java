package com.dietician.server.services;

import com.dietician.server.db.entities.User;
import com.dietician.server.db.entities.UserData;
import com.dietician.server.db.repositories.UserRepository;
import com.dietician.server.utilities.exceptions.UserNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public Long registerUser(User user) {
        return userRepository.save(user).getId();
    }

    public List<User> getUsers() {
        return userRepository.findAll();
    }

    public List<UserData> getUserDataListByUserId(Long userId) {
        return userRepository.findById(userId)
                .orElseThrow(() -> new UserNotFoundException(userId))
                .getUserDataHistory();
    }

}
