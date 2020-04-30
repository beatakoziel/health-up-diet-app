package com.dietician.server.db.entities;

import com.dietician.server.db.enums.ExerciseUnit;
import lombok.Builder;

import javax.persistence.*;

@Entity
@Builder
public class Exercise {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private int burnedCalories;

    @Column(nullable = false)
    private ExerciseUnit exerciseUnit;
}
