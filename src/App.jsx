import { useState } from 'react'
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

  return (
    <div className="min-h-screen w-full">
      <Header 
        title="Collection Listing"
        breadcrumbItems={breadcrumbItems}
        tabItems={tabItems}
        selectedTab={selectedTab}
        onTabChange={handleTabChange}
        userProfile={{
          name: "Rajat Mishra",
          agentId: "1234567890"
        }}
      />
      
      {/* Main content area */}
      <div className="p-4 sm:p-6 lg:p-8 w-full">
        <div className="max-w-7xl mx-auto">
        <h2 className=" font-bold mb-4">2X1 Col grid</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start mb-4 mt-4">
            {/* 1st grid starts here */}
            <div className="md:col-span-2 min-h-[50px] bg-blue-100"></div>
            {/* 2nd column starts here */}
            <div className=" min-h-[50px] bg-blue-100"></div>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
            Welcome to CreditX Dashboard
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mb-6">
            This is the main content area. The header component above includes:
          </p>
          
          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700">
            <li>✅ <strong>Breadcrumbs</strong> - Navigational breadcrumb component</li>
            <li>✅ <strong>Tabs</strong> - Interactive tab component with states (normal, selected, disabled)</li>
            <li>✅ <strong>Header</strong> - Complete header with logo, notifications, and user profile</li>
            <li>✅ <strong>Exact Figma Styling</strong> - Colors, fonts, spacing, and shadows match the design</li>
            <li>✅ <strong>Responsive Design</strong> - Fully responsive across all screen sizes</li>
          </ul>
          
          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">Current Tab: {selectedTab}</h3>
            <p className="text-sm sm:text-base text-blue-700">
              Try clicking on different tabs in the header to see the state changes! The header is now fully responsive.
            </p>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
