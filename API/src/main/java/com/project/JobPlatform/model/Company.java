package com.project.JobPlatform.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "companies")
public class Company {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long companyId;

    private String description;

    private String companyName;

    private String industry;
    private String website_url;

    @OneToMany(mappedBy = "company", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<User> users;


    @OneToMany(mappedBy = "company", cascade = CascadeType.ALL, orphanRemoval = true)  // Change 'joblistings' to 'company'
    private List<JobListing> jobListings;

    @OneToMany(mappedBy = "company", cascade = CascadeType.ALL, orphanRemoval = true) // Ensure this maps to 'company' in Review
    private List<Review> reviews;

    public Long getCompanyId() {
        return companyId;
    }

    public void setCompanyId(Long companyId) {
        this.companyId = companyId;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getIndustry() {
        return industry;
    }

    public void setIndustry(String industry) {
        this.industry = industry;
    }

    public String getWebsite_url() {
        return website_url;
    }

    public void setWebsite_url(String website_url) {
        this.website_url = website_url;
    }

    public List<User> getUsers() {
        return users;
    }

    public void setUsers(List<User> users) {
        this.users = users;
    }

    public List<JobListing> getJoblistings() {
        return jobListings;
    }

    public void setJoblistings(List<JobListing> joblistings) {
        this.jobListings = joblistings;
    }

    public List<Review> getReviews() {
        return reviews;
    }

    public void setReviews(List<Review> reviews) {
        this.reviews = reviews;
    }



}
