
"use client";

import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const FooterComponent = () => {
    return (
        <Footer style={{ textAlign: 'center', background: '#f7f9fc', padding: '40px 0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div>
                    <h4>AlwaysApply</h4>
                    <p>Call now: +91 8917770678</p>
                    <p>Address: 456 Chauri Bazar, New Delhi</p>
                </div>
                <div>
                    <h4>Quick Link</h4>
                    <p>Contact</p>
                    <p>Admin</p>
                </div>
                <div>
                    <h4>Candidate</h4>
                    <p>Browse Jobs</p>
                    <p>Dashboard</p>
                </div>
                <div>
                    <h4>Employers</h4>
                    <p>Post a Job</p>
                    <p>Manage Applications</p>
                </div>
            </div>
            <p>© 2024 AlwaysApply - Job Portal. All Rights Reserved</p>
        </Footer>
    );
};

export default FooterComponent;
