package com.dietician.server.dtos.responses;

import com.dietician.server.db.enums.FreeTimeActivityLevel;
import com.dietician.server.db.enums.Gender;
import com.dietician.server.db.enums.Goal;
import com.dietician.server.db.enums.WorkActivityLevel;
import lombok.Getter;
import lombok.Setter;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Getter
@Setter
public class UserGoalFrontInfo {
    private List<String> goalsList;
    private List<String> gendersList;
    private List<String> workoutActivityLevelList;
    private List<String> freeTimeActivityLevelList;

    public UserGoalFrontInfo() {
        this.goalsList = Arrays.stream(Goal.values()).map(Goal::getLabel)
                .collect(Collectors.toList());
        this.gendersList = Arrays.stream(Gender.values()).map(Gender::getLabel)
                .collect(Collectors.toList());
        this.workoutActivityLevelList = Arrays.stream(WorkActivityLevel.values()).map(WorkActivityLevel::getLabel)
                .collect(Collectors.toList());
        this.freeTimeActivityLevelList = Arrays.stream(FreeTimeActivityLevel.values()).map(FreeTimeActivityLevel::getLabel)
                .collect(Collectors.toList());
    }
}
