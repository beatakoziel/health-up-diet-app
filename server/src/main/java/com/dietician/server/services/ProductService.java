package com.dietician.server.services;

import com.dietician.server.db.entities.Product;
import com.dietician.server.db.repositories.NutrientsPerPortionRepository;
import com.dietician.server.db.repositories.ProductRepository;
import com.dietician.server.utilities.exceptions.ProductNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;
    private final NutrientsPerPortionRepository nutrientsRepository;

    public Long addProduct(Product product) {
        nutrientsRepository.save(product.getStandardPortionNutrients());
        return productRepository.save(product).getId();
    }

    public Product getProduct(Long productId) {
        return productRepository.findById(productId)
                .orElseThrow(() -> new ProductNotFoundException(productId));
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }
}
