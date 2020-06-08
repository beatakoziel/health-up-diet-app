package com.dietician.server.db.entities;

import com.dietician.server.db.enums.Category;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Builder
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String name;

    @Column(nullable = false)
    @Enumerated(value = EnumType.STRING)
    private Category category;

    @OneToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    private NutrientsPerPortion standardPortionNutrients;
}
