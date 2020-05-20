package com.dietician.server.services;

import com.dietician.server.db.entities.User;
import com.dietician.server.db.entities.UserGoalData;
import com.dietician.server.db.enums.UserRole;
import com.dietician.server.db.repositories.UserRepository;
import com.dietician.server.utilities.exceptions.UserNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class UserService implements UserDetailsService {

    private final UserRepository userRepository;

    public Long registerUser(User user) {
        return userRepository.save(user).getId();
    }

    public void checkFacebookUser(String facebookUserId, String email) {
        if (!userRepository.findByFacebookUserId(facebookUserId).isPresent()) {
            User facebookUser = buildFacebookUser(facebookUserId, email);
            userRepository.save(facebookUser);
        }
    }

    public List<User> getUsers() {
        return userRepository.findAll();
    }

    public List<UserGoalData> getUserGoalDataListByUsername(String username) {
        return userRepository.findByEmail(username)
                .orElseThrow(() -> new UserNotFoundException(username))
                .getUserGoalDataHistory();
    }

    @Override
    public UserDetails loadUserByUsername(String s) {
        return userRepository.findByEmail(s)
                .orElseThrow(() -> new UserNotFoundException(s));
    }

    public User getUserByUsername(String username) {
        return userRepository.findByEmail(username)
                .orElseThrow(() -> new UserNotFoundException(username));
    }

    private User buildFacebookUser(String facebookUserId, String email) {
        return User.builder()
                .email(email)
                .facebookUserId(facebookUserId)
                .role(UserRole.USER)
                .blocked(false)
                .userGoalDataHistory(new ArrayList<>())
                .build();
    }

    public String getUserRole(String username) {
        return getUserByUsername(username).getRole().toString();
    }
}
