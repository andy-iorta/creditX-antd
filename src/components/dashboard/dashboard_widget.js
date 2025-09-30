import React, { useState } from 'react';
import { Card, Select, Statistic, Row, Col, Typography } from 'antd';
import { 
  DatabaseOutlined, 
  DownOutlined
} from '@ant-design/icons';

const { Title, Text } = Typography;

export const DashboardWidget = () => {
  const [headerFilter, setHeaderFilter] = useState('mtd');
  const [contentFilter, setContentFilter] = useState('all-sources');

  return React.createElement(Card, { 
    className: "dashboard-widget",
    style: { 
      borderRadius: '24px',
      boxShadow: '0px 4px 16px rgba(0,0,0,0.06)',
      minHeight: '390px'
    }
  },
    React.createElement('div', { style: { padding: '12px' } },
      // Widget Header
      React.createElement('div', { 
        style: { 
          backgroundColor: '#dee9ff',
          borderRadius: '14px',
          padding: '8px',
          marginBottom: '18px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }
      },
        React.createElement('div', { 
          style: { 
            width: '32px', 
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }
        },
          React.createElement(DatabaseOutlined, { style: { fontSize: '24px', color: '#003399' } })
        ),
        
        React.createElement('div', { style: { flex: 1, display: 'flex', alignItems: 'center', gap: '8px' } },
          React.createElement(Title, { 
            level: 5, 
            style: { 
              margin: 0, 
              color: '#003399',
              fontSize: '16px'
            }
          }, 'Collection Bucket')
        ),
        
        // Header Select Dropdown
        React.createElement(Select, {
          value: headerFilter,
          onChange: setHeaderFilter,
          style: { 
            backgroundColor: 'white',
            borderRadius: '4px',
            minWidth: '80px'
          },
          suffixIcon: React.createElement(DownOutlined, { style: { color: '#003399' } }),
          options: [
            { value: 'mtd', label: 'MTD' },
            { value: 'ytd', label: 'YTD' },
            { value: 'dtd', label: 'DTD' }
          ]
        })
      ),

      // Widget Content
      React.createElement('div', null,
        React.createElement('div', { 
          style: { 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginBottom: '16px',
            padding: '0 12px'
          }
        },
          React.createElement(Title, { 
            level: 5, 
            style: { 
              margin: 0, 
              color: '#003399',
              fontSize: '14px'
            }
          }, 'My Collection list'),
          
          // Content Select Dropdown
          React.createElement(Select, {
            value: contentFilter,
            onChange: setContentFilter,
            style: { 
              backgroundColor: 'white',
              borderRadius: '4px',
              minWidth: '120px'
            },
            suffixIcon: React.createElement(DownOutlined, { style: { color: '#003399' } }),
            options: [
              { value: 'all-sources', label: 'All sources' },
              { value: 'internal', label: 'Internal' },
              { value: 'vendors', label: 'Vendors' }
            ]
          })
        ),

        // Data Grid
        React.createElement('div', { style: { padding: '8px 0' } },
          // First Row
          React.createElement(Row, { gutter: 0, style: { marginBottom: '12px' } },
            React.createElement(Col, { 
              span: 12, 
              style: { 
                borderRight: '1px solid #b9bcc3',
                padding: '6px 0'
              }
            },
              React.createElement(Statistic, {
                value: 150,
                valueStyle: { 
                  color: '#003399', 
                  fontSize: '32px',
                  fontWeight: 'bold',
                  textAlign: 'center'
                },
                suffix: ""
              }),
              React.createElement(Text, { 
                style: { 
                  color: '#366bd6', 
                  fontSize: '14px',
                  textAlign: 'center',
                  display: 'block',
                  textTransform: 'capitalize'
                }
              }, 'All Assigned')
            ),
            React.createElement(Col, { span: 12, style: { padding: '6px 0' } },
              React.createElement(Statistic, {
                value: 85,
                valueStyle: { 
                  color: '#003399', 
                  fontSize: '32px',
                  fontWeight: 'bold',
                  textAlign: 'center'
                },
                suffix: ""
              }),
              React.createElement(Text, { 
                style: { 
                  color: '#366bd6', 
                  fontSize: '14px',
                  textAlign: 'center',
                  display: 'block',
                  textTransform: 'capitalize'
                }
              }, 'Contacted')
            )
          ),

          // Second Row
          React.createElement(Row, { gutter: 0, style: { marginBottom: '12px' } },
            React.createElement(Col, { 
              span: 12, 
              style: { 
                borderRight: '1px solid #b9bcc3',
                padding: '6px 0'
              }
            },
              React.createElement(Statistic, {
                value: 40,
                valueStyle: { 
                  color: '#003399', 
                  fontSize: '32px',
                  fontWeight: 'bold',
                  textAlign: 'center'
                },
                suffix: ""
              }),
              React.createElement(Text, { 
                style: { 
                  color: '#366bd6', 
                  fontSize: '14px',
                  textAlign: 'center',
                  display: 'block',
                  textTransform: 'capitalize'
                }
              }, 'Not Contacted')
            ),
            React.createElement(Col, { span: 12, style: { padding: '6px 0' } },
              React.createElement(Statistic, {
                value: 30,
                valueStyle: { 
                  color: '#003399', 
                  fontSize: '32px',
                  fontWeight: 'bold',
                  textAlign: 'center'
                },
                suffix: ""
              }),
              React.createElement(Text, { 
                style: { 
                  color: '#366bd6', 
                  fontSize: '14px',
                  textAlign: 'center',
                  display: 'block',
                  textTransform: 'capitalize'
                }
              }, 'partially paid')
            )
          ),

          // Third Row
          React.createElement(Row, { gutter: 0 },
            React.createElement(Col, { 
              span: 12, 
              style: { 
                borderRight: '1px solid #b9bcc3',
                padding: '6px 0'
              }
            },
              React.createElement(Statistic, {
                value: 15,
                valueStyle: { 
                  color: '#003399', 
                  fontSize: '32px',
                  fontWeight: 'bold',
                  textAlign: 'center'
                },
                suffix: ""
              }),
              React.createElement(Text, { 
                style: { 
                  color: '#366bd6', 
                  fontSize: '14px',
                  textAlign: 'center',
                  display: 'block',
                  textTransform: 'capitalize'
                }
              }, 'to be dropped')
            ),
            React.createElement(Col, { span: 12, style: { padding: '6px 0' } },
              React.createElement(Statistic, {
                value: 200,
                valueStyle: { 
                  color: '#003399', 
                  fontSize: '32px',
                  fontWeight: 'bold',
                  textAlign: 'center'
                },
                suffix: ""
              }),
              React.createElement(Text, { 
                style: { 
                  color: '#366bd6', 
                  fontSize: '14px',
                  textAlign: 'center',
                  display: 'block',
                  textTransform: 'capitalize'
                }
              }, 'collected')
            )
          )
        )
      )
    )
  );
};
