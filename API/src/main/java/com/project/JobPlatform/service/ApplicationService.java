package com.project.JobPlatform.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.JobPlatform.exceptions.CustomExceptions;
import com.project.JobPlatform.model.Application;
import com.project.JobPlatform.model.JobListing;
import com.project.JobPlatform.model.User;
import com.project.JobPlatform.repository.ApplicationRepository;
import com.project.JobPlatform.repository.JobListingRepository;
import com.project.JobPlatform.repository.UserRepository;

@Service
public class ApplicationService {

    @Autowired
    private ApplicationRepository applicationRepository;

    @Autowired
    private JobListingRepository jobListingRepository;

    @Autowired
    private UserRepository userRepository;

    public List<Application> getAllApplications() {
        return applicationRepository.findAll();
    }

    public Application applyForJob(Long userId, Long jobId, Application application) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new CustomExceptions("User not found with id: " + userId));
        
        JobListing jobListing = jobListingRepository.findById(jobId)
                .orElseThrow(() -> new CustomExceptions("Job not found with id: " + jobId));

        application.setUser(user);
        application.setJobListing(jobListing);
        application.setStatus("PENDING");
        application.setSubmittedAt(new Date());
        application.setUpdatedAt(new Date());

        return applicationRepository.save(application);
    }

    public List<Application> getUserApplications(Long userId) {
        return applicationRepository.findByUser_UserId(userId);
    }

    public List<Application> getJobApplications(Long jobId) {
        return applicationRepository.findByJobListing_JobListingId(jobId);
    }

    public Application updateApplicationStatus(Long applicationId, String status) {
        Application application = applicationRepository.findById(applicationId)
                .orElseThrow(() -> new CustomExceptions("Application not found with id: " + applicationId));
        
        application.setStatus(status);
        return applicationRepository.save(application);
    }

    public void deleteApplication(Long applicationId) {
        if (!applicationRepository.existsById(applicationId)) {
            throw new CustomExceptions("Application not found with id: " + applicationId);
        }
        applicationRepository.deleteById(applicationId);
    }
}
