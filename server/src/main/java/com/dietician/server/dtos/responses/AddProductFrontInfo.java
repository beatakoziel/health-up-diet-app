package com.dietician.server.dtos.responses;

import com.dietician.server.db.enums.Category;
import com.dietician.server.db.enums.PortionUnit;
import lombok.Getter;
import lombok.Setter;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Getter
@Setter
public class AddProductFrontInfo {
    private List<String> categoryList;
    private List<String> portionUnitList;

    public AddProductFrontInfo() {
        this.categoryList = Arrays.stream(Category.values()).map(Category::getLabel)
                .collect(Collectors.toList());
        this.portionUnitList = Arrays.stream(PortionUnit.values()).map(PortionUnit::getLabel)
                .collect(Collectors.toList());
    }
}
