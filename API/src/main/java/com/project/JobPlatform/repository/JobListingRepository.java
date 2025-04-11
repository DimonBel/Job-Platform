package com.project.JobPlatform.repository;

import com.project.JobPlatform.model.JobListing;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface JobListingRepository extends JpaRepository<JobListing, Long> {


    @Query(value = "SELECT * FROM JobListing ORDER BY CAST(SPLIT_PART(salary_range, '-', 1) AS INTEGER) DESC LIMIT 3", nativeQuery = true)
    List<JobListing> find3TopJobs();

    @Query("SELECT j FROM JobListing j WHERE LOWER(j.title) LIKE LOWER(CONCAT('%', :keyword, '%')) "
            + "OR LOWER(j.description) LIKE LOWER(CONCAT('%', :keyword, '%'))")
    List<JobListing> searchJobs(@Param("keyword") String keyword);
}
