package com.dietician.server.db.entities;

import com.dietician.server.db.enums.ExerciseUnit;

import javax.persistence.*;

@Entity
public class WorkoutExercise {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String setName;

    @Column(nullable = false)
    private ExerciseUnit exerciseUnit;

    @ManyToOne
    private User user;
}
