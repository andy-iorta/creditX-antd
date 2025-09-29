import React from "react";
import { Card, Button, Tag, Drawer, Avatar, Space, Typography, Row, Col } from "antd";
import { MoreOutlined, PhoneOutlined, EnvironmentOutlined, CheckCircleOutlined } from "@ant-design/icons";

const { Text, Title } = Typography;

export const CollectionCard = ({
  name,
  loanId,
  emi,
  dueIn,
  source,
  lastStatus,
}) => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  // Generate initials from name
  const getInitials = (fullName) => {
    return fullName
      .split(" ")
      .map((name) => name.charAt(0).toUpperCase())
      .join("")
      .slice(0, 2);
  };

  const handleMenuAction = (action) => {
    switch (action) {
      case "call":
        console.log(`Calling ${name}`);
        break;
      case "direction":
        console.log("Getting direction");
        break;
      case "status":
        console.log("Updating status");
        break;
    }
    setDrawerOpen(false);
  };

  const drawerContent = (
    <div style={{ textAlign: 'center', padding: '12px' }}>
      <div style={{ 
        height: '3px', 
        width: '80px', 
        backgroundColor: '#d1d5db', 
        borderRadius: '9999px', 
        margin: '0 auto 16px' 
      }} />
      
      <Title level={5} style={{ marginBottom: '16px', color: '#3c3d3d' }}>
        Connect with "{name}"
      </Title>
      
      <Row gutter={12} justify="center">
        <Col span={8}>
          <div 
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              gap: '4px',
              cursor: 'pointer'
            }}
            onClick={() => handleMenuAction('call')}
          >
            <div style={{
              width: '48px',
              height: '48px',
              backgroundColor: '#F8D96E',
              borderRadius: '18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <PhoneOutlined style={{ fontSize: '24px', color: '#826603' }} />
            </div>
            <Text style={{ fontSize: '12px', color: '#826603' }}>Call</Text>
          </div>
        </Col>
        
        <Col span={8}>
          <div 
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              gap: '4px',
              cursor: 'pointer'
            }}
            onClick={() => handleMenuAction('direction')}
          >
            <div style={{
              width: '48px',
              height: '48px',
              backgroundColor: '#dbeafe',
              borderRadius: '18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <EnvironmentOutlined style={{ fontSize: '24px', color: '#005db1' }} />
            </div>
            <Text style={{ fontSize: '12px', color: '#005db1' }}>Get Direction</Text>
          </div>
        </Col>
        
        <Col span={8}>
          <div 
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              gap: '4px',
              cursor: 'pointer'
            }}
            onClick={() => handleMenuAction('status')}
          >
            <div style={{
              width: '48px',
              height: '48px',
              backgroundColor: '#dcfce7',
              borderRadius: '18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <CheckCircleOutlined style={{ fontSize: '24px', color: '#00cd4c' }} />
            </div>
            <Text style={{ fontSize: '12px', color: '#00cd4c' }}>Update Status</Text>
          </div>
        </Col>
      </Row>
    </div>
  );

  return (
    <Card 
      className="collection-card"
      style={{ 
        margin: 0,
        width: '100%',
        borderRadius: '8px',
        boxShadow: '0px 4px 12px rgba(0,0,0,0.06)',
        border: '1px solid #efefef'
      }}
    >
      {/* Header Section */}
      <div id="collection-card-header" style={{ 
        borderBottom: '0.6px solid rgba(0,51,153,0.24)', 
        padding: '0px 0px 16px 0px',
        marginBottom: '16px'
      }}>
        <Row align="middle" justify="space-between">
          <Col flex="auto">
            <Space size={12} align="center">
              <Avatar 
                size={40}
                style={{ 
                  backgroundColor: 'rgba(40,177,255,0.16)',
                  color: '#28b1ff',
                  fontWeight: 'bold'
                }}
              >
                {getInitials(name)}
              </Avatar>
              
              <div>
                <Title level={5} style={{ 
                  margin: 0, 
                  color: '#28b1ff',
                  textTransform: 'capitalize'
                }}>
                  {name}
                </Title>
                <Space size={4} align="center">
                  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_5793_23394" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="21">
                      <rect y="0.5" width="20" height="20" fill="#D9D9D9"/>
                    </mask>
                    <g mask="url(#mask0_5793_23394)">
                      <path d="M3.33333 5.50041V3.83374H16.6667V5.50041H3.33333ZM3.33333 17.1671V12.1671H2.5V10.5004L3.33333 6.33374H16.6667L17.5 10.5004V12.1671H16.6667V17.1671H15V12.1671H11.6667V17.1671H3.33333ZM5 15.5004H10V12.1671H5V15.5004Z" fill="#28B1FF"/>
                    </g>
                  </svg>
                  <Text style={{ fontSize: '12px', color: '#777777' }}>
                    {loanId}
                  </Text>
                </Space>
              </div>
            </Space>
          </Col>
          
          <Col>
            <Space size={12}>
              <Tag className="active-tag">Active</Tag>
              <Button 
                type="text" 
                icon={<MoreOutlined />}
                onClick={() => setDrawerOpen(true)}
                size="small"
                style={{ 
                  width: '32px', 
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              />
            </Space>
          </Col>
        </Row>
      </div>

      {/* Content Section */}
      <div style={{ padding: '0' }}>
        <Row gutter={12} style={{ marginBottom: '12px' }}>
          <Col span={8}>
            <div>
              <Text style={{ fontSize: '12px', color: '#777777', display: 'block' }}>EMI INR</Text>
              <Text strong style={{ fontSize: '14px', color: '#333' }}>{emi}</Text>
            </div>
          </Col>
          <Col span={8}>
            <div>
              <Text style={{ fontSize: '12px', color: '#777777', display: 'block' }}>Due In</Text>
              <Text strong style={{ fontSize: '14px', color: '#333' }}>{dueIn}</Text>
            </div>
          </Col>
          <Col span={8}>
            <div>
              <Text style={{ fontSize: '12px', color: '#777777', display: 'block' }}>Source</Text>
              <Text strong style={{ fontSize: '14px', color: '#333' }}>{source}</Text>
            </div>
          </Col>
        </Row>
        
        <div className="last-status-row">
          <div className="last-status-content">
            <Text style={{ fontSize: '12px', color: '#777777', display: 'block' }}>Last Status</Text>
            <Text strong style={{ fontSize: '14px', color: '#333' }}>{lastStatus}</Text>
          </div>
          <Button 
            type="primary" 
            onClick={() => console.log('View button clicked')}
            className="view-button"
            size="middle"
          >
            View
          </Button>
        </div>
      </div>

      <Drawer
        title=""
        placement="bottom"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
        height="auto"
        style={{ borderRadius: '8px 8px 0 0' }}
      >
        {drawerContent}
      </Drawer>
    </Card>
  );
};
