package com.example.bbash.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.bbash.model.User;

public interface Userrepo extends JpaRepository<User,Integer>{
    Optional<User> findByEmail(String email);
    Optional<User> findByUsername(String username);

}
    

