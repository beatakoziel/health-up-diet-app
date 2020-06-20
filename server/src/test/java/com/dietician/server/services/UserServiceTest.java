package com.dietician.server.services;

import com.dietician.server.db.entities.User;
import com.dietician.server.db.enums.UserRole;
import com.dietician.server.db.repositories.UserRepository;
import com.dietician.server.dtos.requests.BasicLoginRequest;
import com.dietician.server.dtos.responses.UserResponse;
import com.dietician.server.utilities.converters.UserConverter;

import com.dietician.server.utilities.exceptions.UserNotFoundException;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Optional;

import static com.dietician.server.utilities.TestBuilders.*;
import static com.dietician.server.utilities.TestConstants.*;
import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@RunWith(SpringRunner.class)
public class UserServiceTest {

    @InjectMocks
    private UserService userService;

    @Mock
    private UserConverter userMapper;
    @Mock
    private UserRepository userRepository;

    @Before
    public void setUp() {
        User user = buildUser();
        UserResponse userResponse = UserResponse.builder()
                .email(USER_TEST_EMAIL)
                .role(UserRole.USER)
                .blocked(false)
                .build();
        when(userRepository.save(any(User.class))).thenReturn(user);
        when(userRepository.findByEmail(USER_TEST_EMAIL)).thenReturn(Optional.of(user));
        when(userMapper.covertToEntity(any(BasicLoginRequest.class))).thenReturn(user);
        when(userMapper.convertToResponse(any(User.class))).thenReturn(userResponse);
    }

    @Test
    public void registerUser_shouldReturnId() {
        assertThat(userService.registerUser(buildUser()))
                .isInstanceOf(Long.class);
    }

    @Test
    public void getUser_shouldReturnUser() {
        User user = userService.getUserByUsername(USER_TEST_EMAIL);
        assertThat(user).isNotNull();
        assertThat(user.getUsername()).isEqualTo(USER_TEST_EMAIL);
    }

    @Test
    public void getUser_shouldThrowUserNotFoundException() {
        assertThrows(UserNotFoundException.class, () -> userService.getUserByUsername(USER_TEST_WRONG_EMAIL));
    }

    @Test
    public void loadUserByUsername_shouldReturnUserDetails() {
        UserDetails userDetails = userService.loadUserByUsername(USER_TEST_EMAIL);
        assertThat(userDetails).isNotNull();
        assertThat(userDetails.getUsername()).isEqualTo(USER_TEST_EMAIL);
    }

}
