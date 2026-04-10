package com.example.studentapp.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.studentapp.model.User;
import com.example.studentapp.repository.UserRepository;
@Service
public class UserService {
    @Autowired
    private UserRepository repo;
    // Register
    public User register(User user) {
        return repo.save(user);
    }
    // Login (FIXED - safe null handling)
    public User login(String username, String password) {
        User user = repo.findByUsername(username);
        // ✅ avoid NullPointerException
        if (user == null) {
            return null;
        }
        // ✅ safe password check
        if (user.getPassword() != null && user.getPassword().equals(password)) {
            return user;
        }
        return null;
    }
    // Get User (no issue here)
    public User getUser(Long id) {
        return repo.findById(id).orElse(null);
    }
}
