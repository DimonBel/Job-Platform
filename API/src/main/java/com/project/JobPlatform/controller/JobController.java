package com.project.JobPlatform.controller;

import com.project.JobPlatform.model.JobListing;
import com.project.JobPlatform.service.JobListingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/jobs")
public class JobController {

    @Autowired
    private JobListingService jobListingService;

    @PostMapping
    public ResponseEntity<JobListing> createJob(@RequestBody JobListing jobListing) {
        return ResponseEntity.ok(jobListingService.createJob(jobListing));
    }

    @GetMapping
    public ResponseEntity<List<JobListing>> getAllJobs() {
        return ResponseEntity.ok(jobListingService.getAllJobs());
    }

    @GetMapping("/{jobId}")
    public ResponseEntity<JobListing> getJobById(@PathVariable Long jobId) {
        return ResponseEntity.ok(jobListingService.getJobById(jobId));
    }

    @PutMapping("/{jobId}")
    public ResponseEntity<JobListing> updateJob(@PathVariable Long jobId, @RequestBody JobListing updatedJob) {
        return ResponseEntity.ok(jobListingService.updateJob(jobId, updatedJob));
    }

    @DeleteMapping("/{jobId}")
    public ResponseEntity<Void> deleteJob(@PathVariable Long jobId) {
        jobListingService.deleteJob(jobId);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/search")
    public ResponseEntity<List<JobListing>> searchJobs(@RequestParam String keyword) {
        return ResponseEntity.ok(jobListingService.searchJobs(keyword));
    }

    @GetMapping("/top")
    public ResponseEntity<List<JobListing>> getTopJobs() {
        return ResponseEntity.ok(jobListingService.getTopJobs());
    }
} 