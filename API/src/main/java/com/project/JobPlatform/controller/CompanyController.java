package com.project.JobPlatform.controller;

import com.project.JobPlatform.model.Company;
import com.project.JobPlatform.model.JobListing;
import com.project.JobPlatform.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/companies")
public class CompanyController {

    @Autowired
    private CompanyService companyService;

    @PostMapping
    public ResponseEntity<Company> createCompany(@RequestBody Company company) {
        return ResponseEntity.ok(companyService.createCompany(company));
    }

    @PostMapping("/{companyId}/jobs")
    public ResponseEntity<JobListing> createJob(
            @PathVariable Long companyId,
            @RequestBody JobListing jobListing) {
        return ResponseEntity.ok(companyService.addJob(companyId, jobListing));
    }

    @PutMapping("/{companyId}/jobs/{jobId}")
    public ResponseEntity<JobListing> updateJob(
            @PathVariable Long companyId,
            @PathVariable Long jobId,
            @RequestBody JobListing updatedJob) {
        return ResponseEntity.ok(companyService.updateJob(companyId, jobId, updatedJob));
    }

    @GetMapping("/{companyId}/jobs")
    public ResponseEntity<List<JobListing>> getCompanyJobs(@PathVariable Long companyId) {
        return ResponseEntity.ok(companyService.getJobsByCompany(companyId));
    }
} 