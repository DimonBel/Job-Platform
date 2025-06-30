package com.project.JobPlatform.service;

import com.project.JobPlatform.exceptions.CustomExceptions;
import com.project.JobPlatform.model.Company;
import com.project.JobPlatform.model.JobListing;
import com.project.JobPlatform.repository.CompanyRepository;
import com.project.JobPlatform.repository.JobListingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompanyService {

    @Autowired
    private JobListingRepository jobListingRepository;

    @Autowired
    private CompanyRepository companyRepository;

    public Company createCompany(Company company) {
        return companyRepository.save(company);
    }

    public JobListing addJob(Long clientId, JobListing job) {
        Company client = companyRepository.findById(clientId)
                .orElseThrow(() -> new CustomExceptions("Client not found"));

        client.addJob(job);
        return jobListingRepository.save(job);
    }

    public JobListing updateJob(Long companyId, Long jobId, JobListing updatedJob) {
        JobListing job = jobListingRepository.findById(jobId)
                .orElseThrow(() -> new CustomExceptions("Job not found"));

        if (!job.getCompany().getCompanyId().equals(companyId)) {
            throw new CustomExceptions("Unauthorized operation");
        }

        job.setTitle(updatedJob.getTitle());
        job.setDescription(updatedJob.getDescription());
        job.setJob_type(updatedJob.getJob_type());
        job.setSalary_range(updatedJob.getSalary_range());
        job.setLocation(updatedJob.getLocation());
        job.setRequirements(updatedJob.getRequirements());

        return jobListingRepository.save(job);
    }

    public List<JobListing> getJobsByCompany(Long companyId) {
        List<JobListing> jobs = companyRepository.findJobsByClientId(companyId);
        if (jobs.isEmpty()) {
            throw new CustomExceptions("No jobs found for the given client ID");
        }
        return jobs;
    }
}
