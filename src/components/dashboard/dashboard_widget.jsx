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

  return (
    <Card 
      className="dashboard-widget"
      style={{ 
        borderRadius: '24px',
        boxShadow: '0px 4px 16px rgba(0,0,0,0.06)',
        minHeight: '390px'
      }}
    >
      <div style={{ padding: '12px' }}>
      {/* Widget Header */}
      <div style={{ 
        backgroundColor: '#dee9ff',
        borderRadius: '14px',
        padding: '8px',
        marginBottom: '18px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
        <div style={{ 
          width: '32px', 
          height: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <DatabaseOutlined style={{ fontSize: '24px', color: '#003399' }} />
        </div>
        
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Title level={5} style={{ 
            margin: 0, 
            color: '#003399',
            fontSize: '16px'
          }}>
            Collection Bucket
          </Title>
          
          {/* Count badge temporarily commented out */}
          {/* <div style={{
            backgroundColor: 'white',
            borderRadius: '5px',
            padding: '2px 4px'
          }}>
            <Text strong style={{ color: '#003399', fontSize: '12px' }}>220</Text>
          </div> */}
        </div>
        
        {/* Header Select Dropdown */}
        <Select
          value={headerFilter}
          onChange={setHeaderFilter}
          style={{ 
            backgroundColor: 'white',
            borderRadius: '4px',
            minWidth: '80px'
          }}
          suffixIcon={<DownOutlined style={{ color: '#003399' }} />}
          options={[
            { value: 'mtd', label: 'MTD' },
            { value: 'ytd', label: 'YTD' },
            { value: 'dtd', label: 'DTD' }
          ]}
        />
        
        {/* Open icon temporarily commented out */}
        {/* <div style={{ 
          width: '24px', 
          height: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer'
        }}>
          <ExternalLinkOutlined style={{ fontSize: '16px', color: '#003399' }} />
        </div> */}
      </div>

      {/* Widget Content */}
      <div>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          marginBottom: '16px',
          padding: '0 12px'
        }}>
          <Title level={5} style={{ 
            margin: 0, 
            color: '#003399',
            fontSize: '14px'
          }}>
            My Collection list
          </Title>
          
          {/* Content Select Dropdown */}
          <Select
            value={contentFilter}
            onChange={setContentFilter}
            style={{ 
              backgroundColor: 'white',
              borderRadius: '4px',
              minWidth: '120px'
            }}
            suffixIcon={<DownOutlined style={{ color: '#003399' }} />}
            options={[
              { value: 'all-sources', label: 'All sources' },
              { value: 'internal', label: 'Internal' },
              { value: 'vendors', label: 'Vendors' }
            ]}
          />
        </div>

        {/* Data Grid */}
        <div style={{ padding: '8px 0' }}>
          {/* First Row */}
          <Row gutter={0} style={{ marginBottom: '12px' }}>
            <Col span={12} style={{ 
              borderRight: '1px solid #b9bcc3',
              padding: '6px 0'
            }}>
              <Statistic
                value={150}
                valueStyle={{ 
                  color: '#003399', 
                  fontSize: '32px',
                  fontWeight: 'bold',
                  textAlign: 'center'
                }}
                suffix=""
              />
              <Text style={{ 
                color: '#366bd6', 
                fontSize: '14px',
                textAlign: 'center',
                display: 'block',
                textTransform: 'capitalize'
              }}>
                All Assigned
              </Text>
            </Col>
            <Col span={12} style={{ padding: '6px 0' }}>
              <Statistic
                value={85}
                valueStyle={{ 
                  color: '#003399', 
                  fontSize: '32px',
                  fontWeight: 'bold',
                  textAlign: 'center'
                }}
                suffix=""
              />
              <Text style={{ 
                color: '#366bd6', 
                fontSize: '14px',
                textAlign: 'center',
                display: 'block',
                textTransform: 'capitalize'
              }}>
                Contacted
              </Text>
            </Col>
          </Row>

          {/* Second Row */}
          <Row gutter={0} style={{ marginBottom: '12px' }}>
            <Col span={12} style={{ 
              borderRight: '1px solid #b9bcc3',
              padding: '6px 0'
            }}>
              <Statistic
                value={40}
                valueStyle={{ 
                  color: '#003399', 
                  fontSize: '32px',
                  fontWeight: 'bold',
                  textAlign: 'center'
                }}
                suffix=""
              />
              <Text style={{ 
                color: '#366bd6', 
                fontSize: '14px',
                textAlign: 'center',
                display: 'block',
                textTransform: 'capitalize'
              }}>
                Not Contacted
              </Text>
            </Col>
            <Col span={12} style={{ padding: '6px 0' }}>
              <Statistic
                value={30}
                valueStyle={{ 
                  color: '#003399', 
                  fontSize: '32px',
                  fontWeight: 'bold',
                  textAlign: 'center'
                }}
                suffix=""
              />
              <Text style={{ 
                color: '#366bd6', 
                fontSize: '14px',
                textAlign: 'center',
                display: 'block',
                textTransform: 'capitalize'
              }}>
                partially paid
              </Text>
            </Col>
          </Row>

          {/* Third Row */}
          <Row gutter={0}>
            <Col span={12} style={{ 
              borderRight: '1px solid #b9bcc3',
              padding: '6px 0'
            }}>
              <Statistic
                value={15}
                valueStyle={{ 
                  color: '#003399', 
                  fontSize: '32px',
                  fontWeight: 'bold',
                  textAlign: 'center'
                }}
                suffix=""
              />
              <Text style={{ 
                color: '#366bd6', 
                fontSize: '14px',
                textAlign: 'center',
                display: 'block',
                textTransform: 'capitalize'
              }}>
                to be dropped
              </Text>
            </Col>
            <Col span={12} style={{ padding: '6px 0' }}>
              <Statistic
                value={200}
                valueStyle={{ 
                  color: '#003399', 
                  fontSize: '32px',
                  fontWeight: 'bold',
                  textAlign: 'center'
                }}
                suffix=""
              />
              <Text style={{ 
                color: '#366bd6', 
                fontSize: '14px',
                textAlign: 'center',
                display: 'block',
                textTransform: 'capitalize'
              }}>
                collected
              </Text>
            </Col>
          </Row>
        </div>
      </div>
      </div>
    </Card>
  );
};
