package com.dietician.server.dtos.requests;

import javax.validation.constraints.NotNull;

public class GymDiaryRequest {
    @NotNull
    private String quantity;

    private int weight;

    private Long workoutExercise;
}
