package com.dietician.server.controllers;

import com.dietician.server.db.enums.Goal;
import com.dietician.server.dtos.responses.UserGoalFrontInfo;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("info")
@AllArgsConstructor
@CrossOrigin
public class InfoController {

    @GetMapping("/goal")
    public ResponseEntity<UserGoalFrontInfo> getUserDataInfo() {
        return ResponseEntity.ok(new UserGoalFrontInfo());
    }

    @GetMapping("/go")
    public ResponseEntity<Goal> getGoal() {
        return ResponseEntity.ok(Goal.getByLabel("Utrzymanie"));
    }
}
