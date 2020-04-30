package com.dietician.server.dtos.requests;

import com.dietician.server.db.enums.ExerciseUnit;

import javax.validation.constraints.NotNull;

public class WorkoutExercise {
    @NotNull
    private String name;

    @NotNull
    private String setName;

    @NotNull
    private ExerciseUnit exerciseUnit;

    private Long userId;
}
