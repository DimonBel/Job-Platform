package com.project.JobPlatform.service;

import com.project.JobPlatform.exceptions.CustomExceptions;
import com.project.JobPlatform.model.User;
import com.project.JobPlatform.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Base64;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;


    // register
    public User registration(User user) {
        if (user.getEmailId() == null || user.getEmailId().isEmpty()) {
            throw new CustomExceptions("Email cannot be null or empty");
        }

        if (!user.getPassword().equals(user.getConfirmPassword())) {
            throw new CustomExceptions("Confirmed password does not match");
        }

        // Check if email already exists
        if (userRepository.existsByEmail(user.getEmailId())) {
            throw new CustomExceptions("Email already exists");
        }
        user.setPassword(Base64.getEncoder().encodeToString(user.getPassword().getBytes()));

        return userRepository.save(user);
    }

    public User login(String email, String password, String loginAs) {

        User client = userRepository.findByEmail(email);

        if (client != null) {
            // Decode the stored password
            String decodedPassword = new String(Base64.getDecoder().decode(client.getPassword()));

            // Verify the password and other details
            if (decodedPassword.equals(password) &&
                    loginAs != null && loginAs.equals(client.getLoginAs())) {
                return client;
            }
        }
        throw new CustomExceptions("Invalid email, password, or role!");
    }

    // update
    public User updateClient(Long id, User usertData) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("User not found"));

        user.setUserName(usertData.getUserName());

        return userRepository.save(user);
    }


}
