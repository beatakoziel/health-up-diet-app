package com.dietician.server.controllers;

import com.dietician.server.configurations.security.jwt.JwtUtil;
import com.dietician.server.dtos.requests.BasicLoginRequest;
import com.dietician.server.dtos.requests.FacebookLoginRequest;
import com.dietician.server.dtos.responses.LoginResponse;
import com.dietician.server.services.AuthService;
import com.dietician.server.services.UserService;
import com.dietician.server.utilities.converters.UserConverter;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@AllArgsConstructor
@CrossOrigin
public class AuthController {

    private final UserService userService;
    private final AuthService authService;
    private final UserConverter userConverter;
    private final JwtUtil jwtTokenUtil;

    @GetMapping("/test")
    public String test() {
        return "hello";
    }

    @PostMapping(value = "/signup", consumes = "application/json")
    public ResponseEntity<Void> registerUser(@RequestBody @Valid BasicLoginRequest request) {
        userService.registerUser(userConverter.covertToEntity(request));
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @PostMapping(value = "/login", consumes = "application/json")
    public ResponseEntity<LoginResponse> basicLogin(@RequestBody BasicLoginRequest user) throws Exception {
        return ResponseEntity.ok(authService.basicLogin(user));
    }

    @PostMapping(value = "/login/fb", consumes = "application/json")
    public ResponseEntity<LoginResponse> loginThroughFacebook(@RequestBody FacebookLoginRequest user) {
        return ResponseEntity.ok(authService.facebookLogin(user));
    }

}
