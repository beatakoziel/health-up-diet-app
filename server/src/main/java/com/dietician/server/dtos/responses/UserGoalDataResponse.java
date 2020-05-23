package com.dietician.server.dtos.responses;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;

@Getter
@Builder
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserGoalDataResponse {
    private Float weight;
    private Float height;
    private Byte age;
    private int calories;
    private int carbohydrates;
    private int proteins;
    private int fat;
    private String goal;
    private String gender;
    private String workActivityLevel;
    private String freeTimeActivityLevel;
    private boolean dataCompleted;
}
