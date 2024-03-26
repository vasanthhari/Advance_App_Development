package com.example.bbash.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.example.bbash.dto.AuthRequest;
import com.example.bbash.dto.AuthResponse;
import com.example.bbash.dto.Userdto;
import com.example.bbash.model.User;
import com.example.bbash.model.enumerate.Role;
// import com.example.giftcraft.dto.Request.AuthenticationRequest;
// import com.example.giftcraft.dto.Request.RegisterRequest;
// import com.example.giftcraft.dto.Response.AuthenticationResponse;
// import com.example.giftcraft.entity.UserRegister;
// import com.example.giftcraft.entity.enumerate.Role;
// import com.example.giftcraft.repository.UserRegisterRepository;
import com.example.bbash.repository.Userrepo;

import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor
public class AuthService {
	@Autowired
    private final Userrepo userRegisterRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

 
    public AuthResponse register(Userdto request) {
    
		Role role;
		if (request.getRoles() != null) {
			role = request.getRoles();
		} else {
			role = Role.USER;
		}
        User user = User.builder()
                .id(request.getId())
                .username(request.getUsername())
                .email(request.getEmail())
                .mobilenumber(request.getMobilenumber())
                .password(passwordEncoder.encode(request.getPassword()))
                .roles(role)
                .build();

        userRegisterRepository.save(user);

        String jwtToken = jwtService.generateToken(request.getUsername());

        return AuthResponse.builder()
                .token(jwtToken)
                .build();
    }

    public AuthResponse authenticate(AuthRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getUsername(),
                        request.getPassword()
                )
        );

        String jwtToken = jwtService.generateToken(request.getUsername());

        return AuthResponse.builder()
                .token(jwtToken)
                .build();
    }
}
