package com.dietician.server.utilities;

import com.dietician.server.db.entities.User;
import com.dietician.server.db.enums.UserRole;
import com.dietician.server.dtos.requests.BasicLoginRequest;
import com.dietician.server.dtos.responses.UserResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;

import static com.dietician.server.utilities.TestConstants.USER_TEST_EMAIL;
import static com.dietician.server.utilities.TestConstants.USER_TEST_PASSWORD;

public class TestBuilders {

    public static User buildUser() {
        return User.builder()
                .id(1L)
                .email(USER_TEST_EMAIL)
                .password(USER_TEST_PASSWORD)
                .role(UserRole.USER)
                .blocked(false)
                .build();
    }

    public static BasicLoginRequest buildRegisterRequest(String username) {
        return BasicLoginRequest.builder()
                .email(username)
                .password(USER_TEST_PASSWORD)
                .build();
    }

    public static UserResponse buildUserResponse() {
        return UserResponse.builder()
                .id(1L)
                .email(USER_TEST_EMAIL)
                .blocked(false)
                .role(UserRole.USER)
                .build();
    }

    public static BasicLoginRequest buildLoginRequest() {
        return BasicLoginRequest.builder()
                .email(USER_TEST_EMAIL)
                .password(USER_TEST_PASSWORD)
                .build();
    }

    public static String asJsonString(final Object obj) {
        try {
            final ObjectMapper mapper = new ObjectMapper();
            final String jsonContent = mapper.writeValueAsString(obj);
            return jsonContent;
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public static Authentication getAuthentication() {
        return new Authentication() {
            @Override
            public boolean equals(Object another) {
                return false;
            }

            @Override
            public String toString() {
                return null;
            }

            @Override
            public int hashCode() {
                return 0;
            }

            @Override
            public String getName() {
                return null;
            }

            @Override
            public Collection<? extends GrantedAuthority> getAuthorities() {
                return null;
            }

            @Override
            public Object getCredentials() {
                return null;
            }

            @Override
            public Object getDetails() {
                return null;
            }

            @Override
            public Object getPrincipal() {
                return null;
            }

            @Override
            public boolean isAuthenticated() {
                return false;
            }

            @Override
            public void setAuthenticated(boolean b) throws IllegalArgumentException {

            }
        };
    }

}
