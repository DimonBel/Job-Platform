package com.project.JobPlatform.repository;

import com.project.JobPlatform.model.Company;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompanyRepository extends JpaRepository<Company, Long> {
}
