package com.project.JobPlatform.repository;

import com.project.JobPlatform.model.Company;
import com.project.JobPlatform.model.JobListing;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CompanyRepository extends JpaRepository<Company, Long> {

    @Query("SELECT j FROM JobListing j WHERE j.company.companyId = :companyId")
    List<JobListing> findJobsByClientId(@Param("companyId") Long companyId);
}
