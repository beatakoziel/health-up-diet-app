package com.dietician.server.dtos.requests;

import com.dietician.server.db.enums.FreeTimeActivityLevel;
import com.dietician.server.db.enums.Gender;
import com.dietician.server.db.enums.Goal;
import com.dietician.server.db.enums.WorkActivityLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserDataRequest {
    @NotNull
    @Min(value = 0)
    private Float weight;

    @NotNull
    @Min(value = 0)
    private Float height;

    @NotNull
    @Max(value = 120)
    private Byte age;

    @NotNull
    private Goal goal;

    @NotNull
    private Gender gender;

    @NotNull
    private WorkActivityLevel workActivityLevel;

    @NotNull
    private FreeTimeActivityLevel freeTimeActivityLevel;
}
