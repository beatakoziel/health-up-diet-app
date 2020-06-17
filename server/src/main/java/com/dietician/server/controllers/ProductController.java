package com.dietician.server.controllers;

import com.dietician.server.dtos.requests.ProductRequest;
import com.dietician.server.dtos.responses.ProductResponse;
import com.dietician.server.services.ProductService;
import com.dietician.server.utilities.converters.ProductConverter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("products")
@RequiredArgsConstructor
@CrossOrigin
public class ProductController {

    private final ProductService service;
    private final ProductConverter converter;

    @PostMapping
    public ResponseEntity<Void> addProduct(@RequestBody @Valid ProductRequest request) {
        service.addProduct(converter.convertToEntity(request));
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @GetMapping(value = "/{productId}", produces = "application/json")
    public ResponseEntity<ProductResponse> getProductById(@PathVariable Long productId) {
        return ResponseEntity.ok(converter.convertToResponse(service.getProduct(productId)));
    }

    @GetMapping(produces = "application/json")
    public ResponseEntity<List<ProductResponse>> getAllProducts() {
        return ResponseEntity.ok(
                service.getAllProducts().stream()
                        .map(converter::convertToResponse)
                        .collect(Collectors.toList())
        );
    }
}
