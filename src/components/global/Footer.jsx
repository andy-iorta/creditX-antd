import React from 'react';
import { Layout, Typography } from 'antd';

const { Footer: AntFooter } = Layout;
const { Text } = Typography;

export const Footer = ({ 
  className = "",
  companyName = "iorta Technology"
}) => {
  return (
    <AntFooter style={{ 
      backgroundColor: '#e0e7f3',
      padding: '8px 16px',
      textAlign: 'center'
    }}>
      <Text style={{ 
        color: '#003399',
        fontSize: '12px'
      }}>
        Powered by{' '}
        <Text strong style={{ color: '#003399' }}>
          {companyName}
        </Text>
      </Text>
    </AntFooter>
  );
};
