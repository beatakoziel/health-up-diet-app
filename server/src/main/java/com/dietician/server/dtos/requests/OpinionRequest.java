package com.dietician.server.dtos.requests;

import lombok.Builder;
import lombok.Getter;

import javax.validation.constraints.NotNull;

@Getter
@Builder
public class OpinionRequest {
    private String description;

    @NotNull
    private Byte rate;

    @NotNull
    private Long recipeId;

    @NotNull
    private Long userId;
}
