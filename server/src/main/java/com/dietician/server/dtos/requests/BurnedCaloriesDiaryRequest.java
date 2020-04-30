package com.dietician.server.dtos.requests;

import javax.validation.constraints.NotNull;

public class BurnedCaloriesDiaryRequest {
    @NotNull
    private Integer quantity;

    private Long exerciseId;

    @NotNull
    private Long userId;
}
