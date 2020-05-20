package com.dietician.server.controllers;

import com.dietician.server.db.entities.UserData;
import com.dietician.server.dtos.requests.UserDataRequest;
import com.dietician.server.dtos.requests.BasicLoginRequest;
import com.dietician.server.dtos.responses.UserResponse;
import com.dietician.server.services.UserDataService;
import com.dietician.server.services.UserService;
import com.dietician.server.utilities.converters.UserConverter;
import com.dietician.server.utilities.converters.UserDataConverter;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("users")
@AllArgsConstructor
@CrossOrigin
public class UserController {

    private final UserService userService;
    private final UserConverter userConverter;
    private final UserDataService userDataService;
    private final UserDataConverter userDataConverter;

    @GetMapping(produces = "application/json")
    public ResponseEntity<List<UserResponse>> getUsers() {
        return ResponseEntity.ok(
                userService.getUsers().stream()
                        .map(userConverter::convertToResponse)
                        .collect(Collectors.toList()));
    }

    @PostMapping("/{userId}/data")
    public ResponseEntity<Void> addUserData(@PathVariable Long userId, @RequestBody @Valid UserDataRequest request) {
        userDataService.addUserData(userId, userDataConverter.convertToEntity(request));
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @GetMapping(value = "/{userId}", produces = "application/json")
    public ResponseEntity<List<UserData>> getUserDataListByUserId(@PathVariable Long userId) {
        return ResponseEntity.ok(userService.getUserDataListByUserId(userId));
    }
}
