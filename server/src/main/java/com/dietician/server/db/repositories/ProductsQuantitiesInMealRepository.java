package com.dietician.server.db.repositories;

import com.dietician.server.db.entities.ProductsQuantitiesInMeal;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductsQuantitiesInMealRepository extends JpaRepository<ProductsQuantitiesInMeal, Long> {
}
