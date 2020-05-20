package com.dietician.server.db.entities;

import lombok.Builder;

import javax.persistence.*;
import java.util.Date;

@Entity
@Builder
public class BurnedCaloriesDiary {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private final Long id;

    @Column(nullable = false)
    private final int quantity;

    @Column(nullable = false)
    private final Date date;

    @ManyToOne
    private final Exercise exercise;

    @ManyToOne
    private final User user;
}
