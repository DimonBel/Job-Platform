package com.project.JobPlatform.repository;

import com.project.JobPlatform.model.Application;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ApplicationRepository extends JpaRepository<Application, Long> {
    
    @Query("SELECT a FROM Application a WHERE a.user.Id = :userId")
    List<Application> findByUser_UserId(@Param("userId") Long userId);
    
    @Query("SELECT a FROM Application a WHERE a.jobListing.JobListingId = :jobId")
    List<Application> findByJobListing_JobListingId(@Param("jobId") Long jobId);
}
