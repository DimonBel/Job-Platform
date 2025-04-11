package com.project.JobPlatform.repository;

import com.project.JobPlatform.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByEmail(String email);
    boolean existsByEmail(String email);
    boolean existsByLoginAs(String loginAs);

}
