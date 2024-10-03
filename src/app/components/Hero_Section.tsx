import React from 'react';
import { Input, Button, Row, Col } from 'antd';

const HeroSection = () => {
    return (
        <div style={{ padding: '60px 0', textAlign: 'center', background: '#f7f9fc' }}>
            <h1>Find a job that aligns with your interests and skills</h1>
            <p>Thousands of jobs in all the leading sectors are waiting for you.</p>
            <Row gutter={16} justify="center" style={{ marginTop: '30px' }}>
                <Col span={10}>
                    <Input placeholder="Job title, keyword..." size="large" />
                </Col>
                <Col span={6}>
                    <Input placeholder="Location" size="large" />
                </Col>
                <Col span={4}>
                    <Button type="primary" size="large">Find Job</Button>
                </Col>
            </Row>
        </div>
    );
};

export default HeroSection;
