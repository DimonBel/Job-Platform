package com.project.JobPlatform.repository;

import com.project.JobPlatform.model.JobListing;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobListingRepository extends JpaRepository<JobListing, Long> {
}
