import React from 'react';
import { Card, Row, Col, Button } from 'antd';

const jobs = [
    { title: 'Technical Support Specialist', company: 'Google Inc.', location: 'New Delhi, India', salary: '₹30,000 - ₹35,000' },
    { title: 'Senior UI/UX Designer', company: 'Apple', location: 'Boston, USA', salary: '$130,000 - $150,000' },
    { title: 'Marketing Officer', company: 'Intel Corp', location: 'Bangalore, India', salary: '₹1,00,000 - ₹1,25,000' },
];

const FeaturedJobs = () => {
    return (
        <div style={{ padding: '60px 0', textAlign: 'center' }}>
            <h2>Featured Jobs</h2>
            <p>Choose jobs from the top employers and apply for the same.</p>
            <Row gutter={16} justify="center">
                {jobs.map((job, index) => (
                    <Col span={8} key={index}>
                        <Card title={job.title} extra={<Button type="primary">Apply Now</Button>}>
                            <p>{job.company}</p>
                            <p>{job.location}</p>
                            <p>{job.salary}</p>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Button type="link" style={{ marginTop: '20px' }}>View all</Button>
        </div>
    );
};

export default FeaturedJobs;
