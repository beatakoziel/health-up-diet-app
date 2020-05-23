package com.dietician.server.dtos.responses;

import com.dietician.server.db.enums.UserRole;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserResponse {
    private Long id;

    private String email;

    private boolean blocked;

    private UserRole role;
}
