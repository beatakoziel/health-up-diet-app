package com.dietician.server.db.entities;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
public class FoodDiary {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Date date;

    private int waterGlasses;

    @ManyToOne
    private User user;

    @ManyToOne
    private Meal meal;

    @ManyToOne
    private Product product;

    @ManyToMany
    private List<ProductsQuantitiesInMeal> productsQuantitiesInMeals;
}
