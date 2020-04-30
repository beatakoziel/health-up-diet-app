package com.dietician.server.utilities.converters;

import com.dietician.server.db.entities.UserData;
import com.dietician.server.dtos.requests.UserDataRequest;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
@AllArgsConstructor
public class UserDataConverter {

    public UserData convertToEntity(UserDataRequest request) {
        return UserData.builder()
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
