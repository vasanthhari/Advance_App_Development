package com.example.bbash.repository;

import com.example.bbash.model.Bookevent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookeventRepository extends JpaRepository<Bookevent, Long> {
    // You can define custom queries if needed
}
