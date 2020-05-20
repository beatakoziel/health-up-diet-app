package com.dietician.server.db.entities;

import lombok.Builder;

import javax.persistence.*;

@Entity
@Builder
public class ProductsQuantitiesInMeal {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private final Long id;

    @Column(nullable = false)
    private final int quantity;

    @ManyToOne
    private final Product product;
}
