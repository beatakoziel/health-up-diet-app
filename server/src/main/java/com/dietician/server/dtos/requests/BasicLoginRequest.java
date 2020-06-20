package com.dietician.server.dtos.requests;

import lombok.*;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Data
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BasicLoginRequest {
    @Email(message = "Nieprawidłowy format maila")
    @NotNull
    @NotBlank
    private String email;

    @NotNull
    @NotBlank
    private String password;
}
