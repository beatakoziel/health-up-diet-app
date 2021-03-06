package com.dietician.server.dtos.requests;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProductRequest {
    @NotNull
    @NotBlank
    @Size(max = 100, message = "Name should be shorter than 100 characters")
    private String name;

    @NotNull
    private String category;

    @NotNull
    private NutrientsPerPortionRequest nutrientsPerPortion;
}
