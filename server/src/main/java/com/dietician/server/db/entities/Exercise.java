package com.dietician.server.db.entities;

import com.dietician.server.db.enums.ExerciseUnit;
import lombok.Builder;

import javax.persistence.*;

@Entity
@Builder
public class Exercise {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private final Long id;

    @Column(nullable = false)
    private final String name;

    @Column(nullable = false)
    private final int burnedCalories;

    @Column(nullable = false)
    private final ExerciseUnit exerciseUnit;
}
