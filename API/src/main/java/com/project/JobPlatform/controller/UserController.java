package com.project.JobPlatform.controller;

import com.project.JobPlatform.model.User;
import com.project.JobPlatform.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<User> registerUser(@RequestBody User user) {
        return ResponseEntity.ok(userService.registration(user));
    }

    @PostMapping("/login")
    public ResponseEntity<User> loginUser(
            @RequestParam String email,
            @RequestParam String password,
            @RequestParam String loginAs) {
        return ResponseEntity.ok(userService.login(email, password, loginAs));
    }
} 