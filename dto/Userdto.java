package com.example.bbash.dto;

import com.example.bbash.model.enumerate.Role;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Builder;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Userdto {
    private Long id;
private String username;
private String email;
private String password;
private String mobilenumber;
private Role roles;
}
