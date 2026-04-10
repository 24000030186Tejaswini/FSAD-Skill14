package com.example.studentapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.studentapp.model.User;
import com.example.studentapp.service.UserService;
import com.example.studentapp.repository.UserRepository;

// ✅ ADD THESE IMPORTS
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserService service;

    @Autowired
    private UserRepository repo;

    // ✅ Register API
    @PostMapping("/register")
    public User register(@RequestBody User user) {
        return service.register(user);
    }

    // ✅ FIXED Login API (VERY IMPORTANT)
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        User u = service.login(user.getUsername(), user.getPassword());

        if (u != null) {
            return ResponseEntity.ok(u);  // success
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body("Invalid credentials"); // fail
        }
    }

    // ✅ Profile API
    @GetMapping("/user/{username}")
    public User getUser(@PathVariable String username) {
        return repo.findByUsername(username);
    }
}