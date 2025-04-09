package com.project.JobPlatform.repository;

import com.project.JobPlatform.model.Profile;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProfileRepository extends JpaRepository<Profile, Long> {
}
