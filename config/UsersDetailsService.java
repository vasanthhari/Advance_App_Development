package com.example.bbash.config;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import com.example.bbash.model.User;
import com.example.bbash.repository.Userrepo;

@Component
public class UsersDetailsService implements UserDetailsService {

    @Autowired
    private Userrepo repository;
    @Override
    public UsersDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> userReg = repository.findByUsername(username);
        return userReg.map(UsersDetails::new)
                .orElseThrow(() -> new UsernameNotFoundException("User not found with username: " + username));
    }

    
}
