package com.dietician.server.controllers;

import com.dietician.server.configurations.security.jwt.JwtUtil;
import com.dietician.server.dtos.requests.BasicLoginRequest;
import com.dietician.server.dtos.requests.FacebookLoginRequest;
import com.dietician.server.dtos.responses.TokenResponse;
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

    private final AuthenticationManager authenticationManager;
    private final UserService userService;
    private final UserConverter userConverter;
    private final JwtUtil jwtTokenUtil;

    @GetMapping("/test")
    public String test() {
        return "hello";
    }

    @PostMapping
    public ResponseEntity<Void> registerUser(@RequestBody @Valid BasicLoginRequest request) {
        userService.registerUser(userConverter.covertToEntity(request));
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @PostMapping(value = "/login", consumes = "application/json")
    public ResponseEntity<TokenResponse> basicLogin(@RequestBody BasicLoginRequest user) throws Exception {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword())
            );
        } catch (BadCredentialsException e) {
            throw new Exception("Incorrect username or password", e);
        }
        final UserDetails userDetails = userService.loadUserByUsername(user.getEmail());
        final String jwt = jwtTokenUtil.generateToken(userDetails);
        return ResponseEntity.ok(new TokenResponse(jwt));
    }

    @PostMapping(value = "/login/fb", consumes = "application/json")
    public ResponseEntity<TokenResponse> loginThroughFacebook(@RequestBody FacebookLoginRequest user) {
        userService.checkFacebookUser(user.getUserID(), user.getEmail());
        final UserDetails userDetails = userService.loadUserByUsername(user.getEmail());
        final String jwt = jwtTokenUtil.generateToken(userDetails);
        return ResponseEntity.ok(new TokenResponse(jwt));
    }

}
