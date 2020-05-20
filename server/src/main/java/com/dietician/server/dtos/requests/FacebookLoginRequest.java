package com.dietician.server.dtos.requests;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Data
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class FacebookLoginRequest {
    @Email(message = "Nieprawidłowy format maila")
    @NotNull
    @NotBlank
    private String email;

    @NotNull
    @NotBlank
    private String userID;
}
