package com.dietician.server.utilities.converters;

import com.dietician.server.db.entities.UserGoalData;
import com.dietician.server.dtos.requests.UserGoalDataRequest;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
@AllArgsConstructor
public class UserDataConverter {

    public UserGoalData convertToEntity(UserGoalDataRequest request) {
        return UserGoalData.builder()
                .date(new Date())
                .weight(request.getWeight())
                .height(request.getHeight())
                .age(request.getAge())
                .goal(request.getGoal())
                .gender(request.getGender())
                .workActivityLevel(request.getWorkActivityLevel())
                .freeTimeActivityLevel(request.getFreeTimeActivityLevel())
                .build();
    }

}
