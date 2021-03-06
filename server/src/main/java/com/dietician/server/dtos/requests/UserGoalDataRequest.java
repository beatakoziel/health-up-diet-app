package com.dietician.server.dtos.requests;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserGoalDataRequest {
    @NotNull
    @Min(value = 0)
    private Float weight;

    @NotNull
    @Min(value = 0)
    private Float height;

    @NotNull
    @Max(value = 120)
    private Byte age;

    @NotNull
    private String goal;

    @NotNull
    private String gender;

    @NotNull
    private String workActivityLevel;

    @NotNull
    private String freeTimeActivityLevel;
}
