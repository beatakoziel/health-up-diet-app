package com.dietician.server.controllers;

import com.dietician.server.configurations.security.jwt.JwtUtil;
import com.dietician.server.dtos.requests.LoginRequest;
import com.dietician.server.dtos.responses.TokenResponse;
import com.dietician.server.services.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@CrossOrigin
public class LoginController {

    private AuthenticationManager authenticationManager;
    private UserService userDetailService;
    private JwtUtil jwtTokenUtil;

    @GetMapping("/test")
    public String test() {
        return "hello";
    }

    @PostMapping(value = "/login", consumes = "application/json")
    public ResponseEntity<TokenResponse> login(@RequestBody LoginRequest user) throws Exception {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword())
            );
        } catch (BadCredentialsException e) {
            throw new Exception("Incorrect username or password", e);
        }
        final UserDetails userDetails = userDetailService.loadUserByUsername(user.getUsername());
        final String jwt = jwtTokenUtil.generateToken(userDetails);
        return ResponseEntity.ok(new TokenResponse(jwt));
    }

}
