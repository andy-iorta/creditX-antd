import React, { useState } from 'react'
import { Header, Footer } from './components/global'

function App() {
  const [selectedTab, setSelectedTab] = useState('all')

  const breadcrumbItems = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Collection Listing", isActive: true }
  ]

  const tabItems = [
    { label: "All", value: "all", isSelected: selectedTab === "all" },
    { label: "Active", value: "active" },
    { label: "Upcoming", value: "upcoming" },
    { label: "Overdue", value: "overdue" }
  ]

  const handleTabChange = (tabValue) => {
    setSelectedTab(tabValue)
    console.log('Tab changed to:', tabValue)
  }

  return React.createElement('div', { className: "min-h-screen w-full" },
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
    
    // Main content area
    React.createElement('div', { className: "p-4 sm:p-6 lg:p-8 w-full" },
      React.createElement('div', { className: "max-w-7xl mx-auto" },
        React.createElement('h2', { className: " font-bold mb-4" }, "2X1 Col grid"),
        React.createElement('div', { className: "grid grid-cols-1 md:grid-cols-3 gap-4 items-start mb-4 mt-4" },
          // 1st grid starts here
          React.createElement('div', { className: "md:col-span-2 min-h-[50px] bg-blue-100" }),
          // 2nd column starts here
          React.createElement('div', { className: " min-h-[50px] bg-blue-100" })
        ),
        React.createElement('h2', { className: "text-xl sm:text-2xl font-bold text-gray-900 mb-4" },
          "Welcome to CreditX Dashboard"
        ),
        React.createElement('p', { className: "text-sm sm:text-base text-gray-600 mb-6" },
          "This is the main content area. The header component above includes:"
        ),
        
        React.createElement('ul', { className: "list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700" },
          React.createElement('li', null, "✅ ", React.createElement('strong', null, "Breadcrumbs"), " - Navigational breadcrumb component"),
          React.createElement('li', null, "✅ ", React.createElement('strong', null, "Tabs"), " - Interactive tab component with states (normal, selected, disabled)"),
          React.createElement('li', null, "✅ ", React.createElement('strong', null, "Header"), " - Complete header with logo, notifications, and user profile"),
          React.createElement('li', null, "✅ ", React.createElement('strong', null, "Exact Figma Styling"), " - Colors, fonts, spacing, and shadows match the design"),
          React.createElement('li', null, "✅ ", React.createElement('strong', null, "Responsive Design"), " - Fully responsive across all screen sizes")
        ),
        
        React.createElement('div', { className: "mt-8 p-4 bg-blue-50 rounded-lg" },
          React.createElement('h3', { className: "font-semibold text-blue-900 mb-2" }, "Current Tab: ", selectedTab),
          React.createElement('p', { className: "text-sm sm:text-base text-blue-700" },
            "Try clicking on different tabs in the header to see the state changes! The header is now fully responsive."
          )
        )
      )
    ),
    
    // Footer
    React.createElement(Footer)
  )
}

export default App
