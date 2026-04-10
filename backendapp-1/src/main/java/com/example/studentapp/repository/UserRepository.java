package com.example.studentapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.studentapp.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByUsername(String username);

}