package com.example.bbash.controller;

import com.example.bbash.model.Food;
import com.example.bbash.service.FoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/admin/food")
public class FoodController {

    @Autowired
    private FoodService foodService;

    @GetMapping
    @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('USER')")
    public List<Food> getAllFoods() {
        return foodService.getAllFoods();
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('USER')")
    public Food getFoodById(@PathVariable long id) {
        return foodService.getFoodById(id);
    }

    @PostMapping
    @PreAuthorize("hasAuthority('ADMIN')")
    public Food createFood(@NonNull @RequestBody Food food) {
        return foodService.createFood(food);
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public Food updateFood(@PathVariable long id, @RequestBody Food food) {
        return foodService.updateFood(id, food);
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public void deleteFood(@PathVariable long id) {
        foodService.deleteFood(id);
    }
}
