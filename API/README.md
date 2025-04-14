# Job Platform API Documentation

This API provides endpoints for managing job listings, applications, companies, users, and related functionality for a job platform application.

## Base URL

All endpoints are prefixed with:
```
http://localhost:8080/jobApplication
```

## Authentication

Most endpoints require authentication. Use the login endpoint to obtain authentication credentials.

## Endpoints

### User Management

#### Register a New User
```http
POST /api/users/register
Content-Type: application/json

{
    "userName": "John Doe",
    "emailId": "john@example.com",
    "password": "password123",
    "confirmPassword": "password123",
    "loginAs": "USER" // or "COMPANY"
}
```
Creates a new user account. The `loginAs` field determines if the user is a job seeker or company representative.

#### User Login
```http
POST /api/users/login
Content-Type: application/json

{
    "email": "john@example.com",
    "password": "password123",
    "loginAs": "USER"
}
```
Authenticates a user and returns user details.

#### Update User
```http
PUT /api/users/{id}
Content-Type: application/json

{
    "userName": "Updated Name"
}
```
Updates user information.

### Company Management

#### Create Company
```http
POST /api/companies
Content-Type: application/json

{
    "companyName": "Tech Corp",
    "description": "A tech company",
    "location": "New York"
}
```
Creates a new company profile.

#### Add Job to Company
```http
POST /api/companies/{companyId}/jobs
Content-Type: application/json

{
    "title": "Senior Java Developer",
    "description": "Looking for experienced Java developer",
    "requirements": ["Java", "Spring Boot", "REST APIs"],
    "location": "New York",
    "salary_range": "80000-120000",
    "job_type": "FULL_TIME"
}
```
Adds a new job listing to a company.

#### Update Company Job
```http
PUT /api/companies/{companyId}/jobs/{jobId}
Content-Type: application/json

{
    "title": "Updated Job Title",
    "description": "Updated description",
    "requirements": ["Updated", "Requirements"],
    "location": "Updated Location",
    "salary_range": "Updated Range",
    "job_type": "Updated Type"
}
```
Updates an existing job listing.

#### Get Company Jobs
```http
GET /api/companies/{companyId}/jobs
```
Retrieves all jobs posted by a specific company.

### Job Listings

#### Create Job Listing
```http
POST /api/jobs
Content-Type: application/json

{
    "title": "Senior Java Developer",
    "description": "Looking for experienced Java developer",
    "requirements": ["Java", "Spring Boot", "REST APIs"],
    "location": "New York",
    "salary_range": "80000-120000",
    "job_type": "FULL_TIME",
    "company": {
        "companyId": 1
    }
}
```
Creates a new job listing.

#### Get All Jobs
```http
GET /api/jobs
```
Retrieves all job listings.

#### Get Job by ID
```http
GET /api/jobs/{jobId}
```
Retrieves a specific job listing.

#### Search Jobs
```http
GET /api/jobs/search?keyword=java
```
Searches for jobs matching the keyword.

#### Get Top Jobs
```http
GET /api/jobs/top
```
Retrieves the top job listings.

#### Update Job
```http
PUT /api/jobs/{jobId}
Content-Type: application/json

{
    "title": "Updated Job Title",
    "description": "Updated description",
    "requirements": ["Updated", "Requirements"],
    "location": "Updated Location",
    "salary_range": "Updated Range",
    "job_type": "Updated Type"
}
```
Updates a job listing.

#### Delete Job
```http
DELETE /api/jobs/{jobId}
```
Deletes a job listing.

### Applications

#### Get All Applications
```http
GET /api/applications
```
Retrieves all job applications.

#### Get User Applications
```http
GET /api/applications/user/{userId}
```
Retrieves all applications submitted by a specific user.

#### Get Job Applications
```http
GET /api/applications/job/{jobId}
```
Retrieves all applications for a specific job.

#### Submit Application
```http
POST /api/applications/apply/{userId}/{jobId}
Content-Type: application/json

{
    "cover_letter": "I am interested in this position..."
}
```
Submits a new job application.

#### Update Application Status
```http
PUT /api/applications/{applicationId}/status?status=ACCEPTED
```
Updates the status of an application. Status can be: PENDING, ACCEPTED, REJECTED.

#### Delete Application
```http
DELETE /api/applications/{applicationId}
```
Deletes an application.

### Profiles

#### Create Profile
```http
POST /api/profiles
Content-Type: application/json

{
    "firstName": "John",
    "lastName": "Doe",
    "location": "New York",
    "resume_url": "http://example.com/resume.pdf",
    "experience": 5,
    "skills": ["Java", "Spring", "SQL"]
}
```
Creates a new user profile.

#### Get Profile
```http
GET /api/profiles/{profileId}
```
Retrieves a specific profile.

#### Get User Profile
```http
GET /api/profiles/user/{userId}
```
Retrieves a user's profile.

#### Update Profile
```http
PUT /api/profiles/{profileId}
Content-Type: application/json

{
    "firstName": "Updated First Name",
    "lastName": "Updated Last Name",
    "location": "Updated Location",
    "resume_url": "Updated Resume URL",
    "experience": 6,
    "skills": ["Updated", "Skills"]
}
```
Updates a profile.

#### Delete Profile
```http
DELETE /api/profiles/{profileId}
```
Deletes a profile.

### Reviews

#### Create Review
```http
POST /api/reviews
Content-Type: application/json

{
    "rating": 5,
    "comment": "Great company to work for",
    "company": {
        "companyId": 1
    }
}
```
Creates a new company review.

#### Get Company Reviews
```http
GET /api/reviews/company/{companyId}
```
Retrieves all reviews for a company.

#### Get User Reviews
```http
GET /api/reviews/user/{userId}
```
Retrieves all reviews by a user.

#### Update Review
```http
PUT /api/reviews/{reviewId}
Content-Type: application/json

{
    "rating": 4,
    "comment": "Updated review comment"
}
```
Updates a review.

#### Delete Review
```http
DELETE /api/reviews/{reviewId}
```
Deletes a review.

### Bookmarks

#### Create Bookmark
```http
POST /api/bookmarks
Content-Type: application/json

{
    "jobListing": {
        "jobListingId": 1
    }
}
```
Creates a new job bookmark.

#### Get User Bookmarks
```http
GET /api/bookmarks/user/{userId}
```
Retrieves all bookmarks for a user.

#### Delete Bookmark
```http
DELETE /api/bookmarks/{bookmarkId}
```
Deletes a bookmark.

### Notifications

#### Get User Notifications
```http
GET /api/notifications/user/{userId}
```
Retrieves all notifications for a user.

#### Mark Notification as Read
```http
PUT /api/notifications/{notificationId}/read
```
Marks a notification as read.

#### Delete Notification
```http
DELETE /api/notifications/{notificationId}
```
Deletes a notification.

## Error Handling

The API uses standard HTTP status codes:
- 200: Success
- 201: Created
- 400: Bad Request
- 401: Unauthorized
- 404: Not Found
- 500: Internal Server Error

Error responses include a message explaining the error:
```json
{
    "timestamp": "2025-04-14T22:45:55.208+00:00",
    "status": 400,
    "error": "Bad Request",
    "message": "Error message here"
}
```
<!-- 
## Security

- All sensitive data is encrypted
- Passwords are hashed before storage
- JWT tokens are used for authentication
- Role-based access control is implemented -->

## Rate Limiting

- API calls are limited to 100 requests per minute per IP address
- Exceeding the limit will result in a 429 Too Many Requests response

## Support

For support, please contact the development team or create an issue in the repository. 