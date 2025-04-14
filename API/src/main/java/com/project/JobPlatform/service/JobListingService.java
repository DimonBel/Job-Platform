package com.project.JobPlatform.service;

import com.project.JobPlatform.exceptions.CustomExceptions;
import com.project.JobPlatform.model.JobListing;
import com.project.JobPlatform.repository.JobListingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobListingService {

    @Autowired
    private JobListingRepository jobListingRepository;

    public JobListing createJob(JobListing jobListing) {
        return jobListingRepository.save(jobListing);
    }

    public List<JobListing> getAllJobs() {
        return jobListingRepository.findAll();
    }

    public JobListing getJobById(Long jobId) {
        return jobListingRepository.findById(jobId)
                .orElseThrow(() -> new CustomExceptions("Job not found with id: " + jobId));
    }

    public JobListing updateJob(Long jobId, JobListing updatedJob) {
        JobListing existingJob = getJobById(jobId);
        
        existingJob.setTitle(updatedJob.getTitle());
        existingJob.setDescription(updatedJob.getDescription());
        existingJob.setJob_type(updatedJob.getJob_type());
        existingJob.setSalary_range(updatedJob.getSalary_range());
        existingJob.setLocation(updatedJob.getLocation());
        existingJob.setRequirements(updatedJob.getRequirements());
        
        return jobListingRepository.save(existingJob);
    }

    public void deleteJob(Long jobId) {
        if (!jobListingRepository.existsById(jobId)) {
            throw new CustomExceptions("Job not found with id: " + jobId);
        }
        jobListingRepository.deleteById(jobId);
    }

    public List<JobListing> searchJobs(String keyword) {
        return jobListingRepository.searchJobs(keyword);
    }

    public List<JobListing> getTopJobs() {
        return jobListingRepository.find3TopJobs();
    }
}
