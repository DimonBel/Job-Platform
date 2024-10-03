"use client";
import React from 'react';
import { Layout, Menu, Button } from 'antd';

const { Header } = Layout;

const HeaderComponent = () => {
    const menuItems = [
        { key: 'home', label: 'Home' },
        { key: 'find-jobs', label: 'Find Jobs' },
        { key: 'employers', label: 'Employers' },
        { key: 'admin', label: 'Admin' },
        { key: 'about-us', label: 'About Us' },
    ];

    return (
        <Header style={{ display: 'flex', justifyContent: 'space-between', background: '#fff' }}>
            <div className="logo" style={{ color: '#000', fontWeight: 'bold', fontSize: '24px' }}>AlwaysApply</div>
            <Menu theme="light" mode="horizontal" items={menuItems} style={{ flex: 1 }} />
            <div style={{ display: 'flex', gap: '16px' }}>
                <Button type="primary">Contact Us</Button>
                <Button>Login</Button>
            </div>
        </Header>
    );
};

export default HeaderComponent;
