import React from 'react';
import { Breadcrumb, Tabs, Avatar, Space, Typography, Button, Dropdown } from 'antd';
import { BellOutlined, DownOutlined } from '@ant-design/icons';
import creditXLogo from '../../assets/creditX_logo.png';
const { Title, Text } = Typography;

export const Header = ({
  title = "Collection Listing",
  breadcrumbItems = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Collection Listing", isActive: true }
  ],
  tabItems = [
    { label: "All", value: "all", isSelected: true },
    { label: "Active", value: "active" },
    { label: "Upcoming", value: "upcoming" },
    { label: "Overdue", value: "overdue" }
  ],
  selectedTab = "all",
  onTabChange,
  userProfile = {
    name: "Rajat Mishra",
    agentId: "1234567890"
  }
}) => {
  const breadcrumbItems_antd = breadcrumbItems.map((item) => ({
    title: item.isActive ? 
      React.createElement(Text, { style: { color: 'white', fontSize: '12px' } }, item.label) :
      React.createElement('a', { href: item.href, style: { color: 'white', fontSize: '12px' } }, item.label)
  }));

  const tabItems_antd = tabItems.map(item => ({
    key: item.value,
    label: item.label,
    disabled: item.isDisabled
  }));

  const userMenuItems = [
    {
      key: 'profile',
      label: 'Profile'
    },
    {
      key: 'settings',
      label: 'Settings'
    },
    {
      type: 'divider'
    },
    {
      key: 'logout',
      label: 'Logout'
    }
  ];

  return React.createElement('div', { 
    style: { 
      background: 'linear-gradient(to bottom, #003399 22.327%, #092358 106.32%)',
      width: '100%'
    }
  },
    // Top Header Section
    React.createElement('div', { 
      style: { 
        backgroundColor: '#d2e1ff',
        padding: '12px 16px',
        boxShadow: '0px 4px 16px rgba(0,64,204,0.24)'
      }
    },
      React.createElement('div', { 
        style: { 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: '1280px',
          margin: '0 auto'
        }
      },
        // Logo
        React.createElement('div', { style: { height: '32px' } },
          React.createElement('img', { 
            src: creditXLogo, 
            alt: "CreditX Logo", 
            style: { height: '100%', width: 'auto' }
          })
        ),

        // Right Side - Notifications and Profile
        React.createElement(Space, { size: 16 },
          // Notification Icon
          React.createElement(Button, { 
            type: "text", 
            icon: React.createElement(BellOutlined, { style: { color: '#003399', fontSize: '20px' } }),
            size: "small",
            style: { 
              width: '32px', 
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }
          }),

          // Divider
          React.createElement('div', { 
            style: { 
              width: '34px', 
              height: '2px', 
              backgroundColor: '#003399',
              borderRadius: '1px'
            }
          }),

          // User Profile Dropdown
          React.createElement(Dropdown, {
            menu: { items: userMenuItems },
            placement: "bottomRight",
            trigger: ['click']
          },
            React.createElement(Space, { style: { cursor: 'pointer' } },
              React.createElement(Avatar, { 
                size: 32,
                style: { 
                  backgroundColor: '#003399',
                  color: 'white',
                  fontSize: '12px'
                }
              }, userProfile.name.split(' ').map(n => n[0]).join('').toUpperCase()),
              React.createElement('div', { style: { textAlign: 'left' } },
                React.createElement(Text, { 
                  style: { 
                    color: '#003399', 
                    fontSize: '12px',
                    fontWeight: 'bold',
                    display: 'block'
                  }
                }, userProfile.name),
                React.createElement(Text, { 
                  style: { 
                    color: '#003399', 
                    fontSize: '10px',
                    display: 'block'
                  }
                }, userProfile.agentId)
              ),
              React.createElement(DownOutlined, { style: { color: '#003399', fontSize: '12px' } })
            )
          )
        )
      )
    ),

    // Sub Header Section
    React.createElement('div', { 
      style: { 
        padding: '16px',
        boxShadow: '0px 4px 16px rgba(0,0,0,0.08)'
      }
    },
      React.createElement('div', { 
        style: { 
          maxWidth: '1280px',
          margin: '0 auto'
        }
      },
        // Breadcrumbs
        React.createElement('div', { style: { marginBottom: '12px' } },
          React.createElement(Breadcrumb, { 
            items: breadcrumbItems_antd,
            separator: "/"
          })
        ),

        // Title Row
        React.createElement('div', { 
          style: { 
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '16px'
          }
        },
          React.createElement(Title, { 
            level: 2, 
            style: { 
              margin: 0, 
              color: 'white',
              fontSize: '24px'
            }
          }, title),
          React.createElement('div', { style: { flex: 1 } })
        )
      ),

      // Tabs Navigation
      React.createElement('div', { 
        style: { 
          maxWidth: '1280px',
          margin: '0 auto'
        }
      },
        React.createElement(Tabs, {
          items: tabItems_antd,
          activeKey: selectedTab,
          onChange: onTabChange,
          tabBarStyle: {
            marginBottom: 0,
            color: 'white'
          },
          size: "middle",
          type: "line"
        })
      )
    )
  );
};
