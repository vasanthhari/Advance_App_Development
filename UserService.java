package com.example.bbash.service;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;
import com.example.bbash.dto.UpdateRequest;
import com.example.bbash.model.User;
@Service
public class UserService {
    @Autowired
    private com.example.bbash.repository.Userrepo userRepository;
    //getuser by email
    public Optional <User> getUserByEmail(String email)
    {
        return userRepository.findByEmail(email);
    }
    //get list of users
    public List<User> getAllUsers(){
        return userRepository.findAll();
    }
    //update User
    public User updateUser(@NonNull String email,UpdateRequest updateRequest){
        return userRepository.findByEmail(email)  //user data are fetched by email by findByEmil method.
            .map(existingUser -> {
                existingUser.setUsername(updateRequest.getUsername()); //this map method name will be updates in the existing user
                existingUser.setEmail(updateRequest.getEmail());
                existingUser.setPassword(updateRequest.getPassword());
                return userRepository.save(existingUser);
            })
            .orElseThrow(() -> new RuntimeException("User not found with this email: " + email));
    }
    //deleteUser
    public void removeUser(@NonNull Integer userId){
        userRepository.deleteById(userId);
    }
    
}
