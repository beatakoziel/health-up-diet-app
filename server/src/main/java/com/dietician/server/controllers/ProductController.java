package com.dietician.server.controllers;

import com.dietician.server.db.entities.Product;
import com.dietician.server.dtos.requests.ProductRequest;
import com.dietician.server.services.ProductService;
import com.dietician.server.utilities.converters.ProductConverter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("products")
@RequiredArgsConstructor
public class ProductController {

    private final ProductService service;
    private final ProductConverter converter;

    @PostMapping
    public ResponseEntity<Void> addProduct(@RequestBody @Valid ProductRequest request) {
        service.addProduct(converter.convertToEntity(request));
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @GetMapping(value = "/{productId}", produces = "application/json")
    public ResponseEntity<Product> getProductById(@PathVariable Long productId) {
        return ResponseEntity.ok(service.getProduct(productId));
    }

    @GetMapping(produces = "application/json")
    public ResponseEntity<List<Product>> getAllProducts() {
        return ResponseEntity.ok(service.getAllProducts());
    }
}
