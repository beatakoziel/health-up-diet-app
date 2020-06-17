package com.dietician.server.controllers;

import com.dietician.server.db.entities.Opinion;
import com.dietician.server.dtos.requests.OpinionRequest;
import com.dietician.server.services.OpinionService;
import com.dietician.server.utilities.converters.OpinionConverter;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("opinions")
@AllArgsConstructor
@CrossOrigin
public class OpinionController {

    private final OpinionService opinionService;
    private final OpinionConverter opinionConverter;

    @PostMapping
    public ResponseEntity<Void> addOpinion(@RequestBody @Valid OpinionRequest request) {
        opinionService.addOpinion(opinionConverter.convertToEntity(request));
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @GetMapping(produces = "application/json")
    public ResponseEntity<List<Opinion>> getOpinionsByRecipeId(Long recipeId) {
        return ResponseEntity.ok(opinionService.getOpinionsByRecipeId(recipeId));
    }
}
