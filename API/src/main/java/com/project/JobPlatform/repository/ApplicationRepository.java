package com.project.JobPlatform.repository;

import com.project.JobPlatform.model.Application;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ApplicationRepository extends JpaRepository<Application, Long> {
}
