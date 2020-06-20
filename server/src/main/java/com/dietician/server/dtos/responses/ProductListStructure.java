package com.dietician.server.dtos.responses;

import com.dietician.server.db.enums.PortionUnit;
import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class ProductListStructure {
    private String name;
    private PortionUnit unit;
    private Integer quantity;
}
