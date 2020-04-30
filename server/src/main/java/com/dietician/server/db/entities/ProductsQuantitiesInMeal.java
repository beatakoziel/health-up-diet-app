package com.dietician.server.db.entities;

import lombok.Builder;

import javax.persistence.*;

@Entity
@Builder
public class ProductsQuantitiesInMeal {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private int quantity;

    @ManyToOne
    private Product product;
}
