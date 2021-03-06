package com.dietician.server.db.entities;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.OffsetDateTime;

@Entity
@Builder
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class FoodDiary {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private OffsetDateTime date;

    private int waterGlasses;

    @ManyToOne
    private User user;

    @ManyToOne
    private Product product;

    private int productPortion;

    @ManyToOne
    private NutrientsPerDay nutrientsPerDay;
}
