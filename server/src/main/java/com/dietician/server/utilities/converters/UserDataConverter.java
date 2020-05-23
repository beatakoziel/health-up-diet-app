package com.dietician.server.utilities.converters;

import com.dietician.server.db.entities.UserGoalData;
import com.dietician.server.db.enums.FreeTimeActivityLevel;
import com.dietician.server.db.enums.Gender;
import com.dietician.server.db.enums.Goal;
import com.dietician.server.db.enums.WorkActivityLevel;
import com.dietician.server.dtos.requests.UserGoalDataRequest;
import com.dietician.server.dtos.responses.UserGoalDataResponse;
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
                .goal(Goal.getByLabel(request.getGoal()))
                .gender(Gender.getByLabel(request.getGender()))
                .workActivityLevel(WorkActivityLevel.getByLabel(request.getWorkActivityLevel()))
                .freeTimeActivityLevel(FreeTimeActivityLevel.getByLabel(request.getFreeTimeActivityLevel()))
                .build();
    }

    public UserGoalDataResponse convertToResponse(UserGoalData entity) {
        return UserGoalDataResponse.builder()
                .weight(entity.getWeight())
                .height(entity.getHeight())
                .age(entity.getAge())
                .calories(entity.getCalories())
                .carbohydrates(entity.getCarbohydrates())
                .proteins(entity.getProteins())
                .fat(entity.getFat())
                .goal(entity.getGoal().getLabel())
                .gender(entity.getGender().getLabel())
                .workActivityLevel(entity.getWorkActivityLevel().getLabel())
                .freeTimeActivityLevel(entity.getFreeTimeActivityLevel().getLabel())
                .build();
    }

}
