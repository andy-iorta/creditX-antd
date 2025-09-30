import React from 'react';
import { Layout, Typography } from 'antd';

const { Footer: AntFooter } = Layout;
const { Text } = Typography;

export const Footer = ({ 
  className = "",
  companyName = "iorta Technology"
}) => {
  return React.createElement(AntFooter, { 
    style: { 
      backgroundColor: '#e0e7f3',
      padding: '8px 16px',
      textAlign: 'center'
    }
  },
    React.createElement(Text, { 
      style: { 
        color: '#003399',
        fontSize: '12px'
      }
    }, 
      'Powered by ',
      React.createElement(Text, { strong: true, style: { color: '#003399' } }, companyName)
    )
  );
};
