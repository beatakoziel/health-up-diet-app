package com.dietician.server.services;

import com.dietician.server.configurations.security.jwt.JwtUtil;
import com.dietician.server.dtos.requests.BasicLoginRequest;
import com.dietician.server.dtos.requests.FacebookLoginRequest;
import com.dietician.server.dtos.responses.LoginResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final AuthenticationManager authenticationManager;
    private final UserService userService;
    private final JwtUtil jwtTokenUtil;

    public LoginResponse basicLogin(@RequestBody BasicLoginRequest user) throws Exception {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword())
            );
        } catch (BadCredentialsException e) {
            throw new RuntimeException("Incorrect username or password", e);
        }
        final UserDetails userDetails = userService.loadUserByUsername(user.getEmail());
        String jwt = jwtTokenUtil.generateToken(userDetails);
        String userRole = userService.getUserRole(user.getEmail());
        return new LoginResponse(jwt, userRole);

    }

    public LoginResponse facebookLogin(FacebookLoginRequest user) {
        userService.checkFacebookUser(user.getUserID(), user.getEmail());
        final UserDetails userDetails = userService.loadUserByUsername(user.getEmail());
        final String jwt = jwtTokenUtil.generateToken(userDetails);
        String userRole = userService.getUserRole(user.getEmail());
        return new LoginResponse(jwt, userRole);
    }

}
