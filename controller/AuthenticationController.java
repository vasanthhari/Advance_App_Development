package com.example.bbash.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.bbash.dto.AuthRequest;
import com.example.bbash.dto.AuthResponse;
import com.example.bbash.dto.Userdto;
import com.example.bbash.model.User;
import com.example.bbash.repository.Userrepo;
import com.example.bbash.service.AuthService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthenticationController {
    @Autowired
	private Userrepo userRegisterRepository;
    private final AuthService service;
	@PostMapping("/register")
	 public ResponseEntity<String> register(
		      @RequestBody Userdto request
		  ) {
		service.register(request);
		    return ResponseEntity.ok("Registered Successfully");
		  }
	@GetMapping("/getregister")
	public List<User> getregister()
	{
		return userRegisterRepository.findAll();
		
	}

		  @PostMapping("/authentication")
		  public ResponseEntity<AuthResponse> authenticate(@RequestBody AuthRequest request)
		  {
			return ResponseEntity.ok(service.authenticate(request));
			  
		  }
    
}