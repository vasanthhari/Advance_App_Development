package com.example.bbash.repository;

import com.example.bbash.model.Add;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AddRepository extends JpaRepository<Add, Long> {
    // You can define custom queries if needed
}
