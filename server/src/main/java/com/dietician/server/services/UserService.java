package com.dietician.server.services;

import com.dietician.server.db.entities.User;
import com.dietician.server.db.entities.UserData;
import com.dietician.server.db.enums.UserRole;
import com.dietician.server.db.repositories.UserRepository;
import com.dietician.server.utilities.exceptions.UserNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
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

    public void checkFacebookUser(String facebookUserId, String email){
        if(!userRepository.findByFacebookUserId(facebookUserId).isPresent()){
            User facebookUser = User.builder()
                    .email(email)
                    .facebookUserId(facebookUserId)
                    .role(UserRole.USER)
                    .blocked(false)
                    .userDataHistory(new ArrayList<>())
                    .build();
            userRepository.save(facebookUser);
        }
    }

    public List<User> getUsers() {
        return userRepository.findAll();
    }

    public List<UserData> getUserDataListByUserId(Long userId) {
        return userRepository.findById(userId)
                .orElseThrow(() -> new UserNotFoundException(userId))
                .getUserDataHistory();
    }

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        return userRepository.findByEmail(s)
                .orElseThrow(() -> new UserNotFoundException(s));
    }
}
