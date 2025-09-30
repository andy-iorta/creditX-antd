import React, { useState } from 'react'
import { Layout, Row, Col, Typography } from 'antd'
import { Header, Footer } from './components/global'
import { DashboardWidget } from './components/dashboard/dashboard_widget'
import { CollectionCard } from './components/dashboard/CollectionCard'

const { Content } = Layout;
const { Title } = Typography;

// Dummy data for 8 profiles
const dummyProfiles = [
  {
    name: "Rahul Sharma",
    loanId: "ID2665754320",
    emi: "1,00,01,500",
    dueIn: "2 Days",
    source: "External",
    lastStatus: "Phone ringing / no answer"
  },
  {
    name: "Priya Patel",
    loanId: "ID2665754321",
    emi: "85,000",
    dueIn: "5 Days",
    source: "Internal",
    lastStatus: "Call answered / payment promised"
  },
  {
    name: "Amit Kumar",
    loanId: "ID2665754322",
    emi: "1,25,000",
    dueIn: "1 Day",
    source: "External",
    lastStatus: "No response"
  },
  {
    name: "Sneha Gupta",
    loanId: "ID2665754323",
    emi: "95,000",
    dueIn: "7 Days",
    source: "Internal",
    lastStatus: "Partial payment received"
  },
  {
    name: "Rajesh Singh",
    loanId: "ID2665754324",
    emi: "1,50,000",
    dueIn: "3 Days",
    source: "External",
    lastStatus: "Call answered / dispute raised"
  },
  {
    name: "Kavita Verma",
    loanId: "ID2665754325",
    emi: "75,000",
    dueIn: "4 Days",
    source: "Internal",
    lastStatus: "Payment scheduled"
  },
  {
    name: "Vikram Joshi",
    loanId: "ID2665754326",
    emi: "1,10,000",
    dueIn: "6 Days",
    source: "External",
    lastStatus: "Call not answered"
  },
  {
    name: "Meera Agarwal",
    loanId: "ID2665754327",
    emi: "90,000",
    dueIn: "8 Days",
    source: "Internal",
    lastStatus: "Follow up required"
  }
]

function Collections() {
  const [selectedTab, setSelectedTab] = useState('all')

  const breadcrumbItems = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Collection Listing", isActive: true }
  ]

  const tabItems = [
    { label: "All", value: "all", isSelected: selectedTab === "all" },
    { label: "Contacted", value: "contacted" },
    { label: "Not Contacted", value: "notcontacted" },
    { label: "Partially Paid", value: "partiallypaid" },
    { label: "To Be Dropped", value: "tobedropped" },
    { label: "Collected", value: "collected" }
  ]

  const handleTabChange = (tabValue) => {
    setSelectedTab(tabValue)
    console.log('Tab changed to:', tabValue)
  }

  return React.createElement(Layout, { style: { minHeight: '100vh' } },
    React.createElement(Header, {
      title: "Collection Listing",
      breadcrumbItems: breadcrumbItems,
      tabItems: tabItems,
      selectedTab: selectedTab,
      onTabChange: handleTabChange,
      userProfile: {
        name: "Rajat Mishra",
        agentId: "1234567890"
      }
    }),
    
    React.createElement(Content, { 
      style: { 
        padding: '16px 24px',
        backgroundColor: '#F8FAFF'
      }
    },
      React.createElement('div', { style: { maxWidth: '1280px', margin: '0 auto' } },
        React.createElement(Title, { 
          level: 2, 
          style: { 
            marginBottom: '16px',
            color: '#1f2937'
          }
        }, "Welcome to CreditX Dashboards"),
        
        React.createElement(Row, { gutter: [16, 16], style: { marginBottom: '16px' } },
          React.createElement(Col, { xs: 24, md: 8 },
            React.createElement(DashboardWidget)
          ),
          React.createElement(Col, { xs: 24, md: 8 },
            React.createElement(DashboardWidget)
          ),
          React.createElement(Col, { xs: 24, md: 8 },
            React.createElement(DashboardWidget)
          )
        ),

        React.createElement(Title, { 
          level: 2, 
          style: { 
            marginBottom: '16px',
            color: '#1f2937'
          }
        }, `List of Collections (${dummyProfiles.length} profiles)`),
        
        React.createElement(Row, { gutter: [16, 16] },
          ...dummyProfiles.map((profile, index) =>
            React.createElement(Col, { key: index, xs: 24, md: 12 },
              React.createElement(CollectionCard, {
                name: profile.name,
                loanId: profile.loanId,
                emi: profile.emi,
                dueIn: profile.dueIn,
                source: profile.source,
                lastStatus: profile.lastStatus
              })
            )
          )
        )
      )
    ),
    
    React.createElement(Footer)
  )
}

export default Collections
