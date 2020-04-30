package com.dietician.server.dtos.requests;

import com.dietician.server.db.enums.ExerciseUnit;

import javax.validation.constraints.NotNull;

public class ExerciseRequest {
    @NotNull
    private String name;

    @NotNull
    private int burnedCalories;

    @NotNull
    private ExerciseUnit exerciseUnit;
}
