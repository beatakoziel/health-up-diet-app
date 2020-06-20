package com.dietician.server.dtos.requests;

import lombok.*;

@Data
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class PaymentDto {
    private String totalPrice;
}
