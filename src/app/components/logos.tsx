
import React from 'react';
import {
    SkypeOutlined,
    AmazonOutlined,
    FacebookOutlined,
    LinkedinOutlined,
    YoutubeOutlined,
    GoogleOutlined,
} from '@ant-design/icons';
import { Space } from 'antd';

const CompanyLogos: React.FC = () => {
    const iconStyle = { fontSize: '48px', margin: '0 16px' };  // Increase size and add margin

    return (
        <div style={{ padding: '100px 0', textAlign: 'center' }}>
            <h3>Top companies hiring now</h3>
            <Space>
                <SkypeOutlined style={iconStyle} />
                <AmazonOutlined style={iconStyle} />
                <FacebookOutlined style={iconStyle} />
                <LinkedinOutlined style={iconStyle} />
                <YoutubeOutlined style={iconStyle} />
                <GoogleOutlined style={iconStyle} />
            </Space>
        </div>
    );
};

export default CompanyLogos;