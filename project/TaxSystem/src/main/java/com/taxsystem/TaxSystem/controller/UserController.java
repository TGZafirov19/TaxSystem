package com.taxsystem.TaxSystem.controller;

import com.taxsystem.TaxSystem.model.User;
import com.taxsystem.TaxSystem.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/users")
    public User createUser(@RequestBody User user) {
        return userRepository.save(user);
    }


    @GetMapping("/login")
    public Map<String, Object> loginUser(@RequestParam String email, @RequestParam String password) {
        Map<String, Object> response = new HashMap<>();
        User user = userRepository.findByEmailAndPassword(email, password);
        if (user != null) {
            response.put("success", true);
        } else {
            response.put("success", false);
            response.put("message", "Email and password combination not found");
        }
        return response;
    }

}
