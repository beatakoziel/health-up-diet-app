package com.dietician.server.db.entities;

import lombok.Builder;

import javax.persistence.*;
import java.util.Date;

@Entity
@Builder
public class BurnedCaloriesDiary {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private int quantity;

    @Column(nullable = false)
    private Date date;

    @ManyToOne
    private Exercise exercise;

    @ManyToOne
    private User user;
}
