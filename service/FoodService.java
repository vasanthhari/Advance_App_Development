package com.example.bbash.service;

import com.example.bbash.model.Food;
import com.example.bbash.repository.FoodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class FoodService {

    @Autowired
    private FoodRepository foodRepository;

    public List<Food> getAllFoods() {
        return foodRepository.findAll();
    }

    public Food getFoodById(long id) {
        Optional<Food> foodOptional = foodRepository.findById(id);
        return foodOptional.orElse(null);
    }

    public Food createFood(@NonNull Food food) {
        return foodRepository.save(food);
    }

    public Food updateFood(long id, Food updatedFood) {
        Optional<Food> foodOptional = foodRepository.findById(id);
        if (foodOptional.isPresent()) {
            updatedFood.setId(id);
            return foodRepository.save(updatedFood);
        } else {
            return null; // Or handle not found case as per your requirement
        }
    }

    public void deleteFood(long id) {
        foodRepository.deleteById(id);
    }
}
