package com.dietician.server.dtos.requests;

import lombok.Builder;
import lombok.Getter;

import javax.validation.constraints.NotNull;

@Getter
@Builder
public class OpinionRequest {
    private final String description;

    @NotNull
    private final Byte rate;

    @NotNull
    private final Long recipeId;

    @NotNull
    private final Long userId;
}
