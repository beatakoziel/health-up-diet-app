package com.dietician.server.db.entities;

import javax.persistence.*;
import java.util.Date;

@Entity
public class GymDiary {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String quantity;

    @Column(nullable = false)
    private Date date;

    @Column(nullable = false)
    private final int weight = 0;

    @ManyToOne
    private WorkoutExercise exercise;
}
