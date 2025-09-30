import React from 'react'
import ReactDOM from 'react-dom/client'
import { ConfigProvider } from 'antd'
import Collections from './collections.js'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  React.createElement(React.StrictMode, null,
    React.createElement(ConfigProvider, {
      theme: {
        token: {
          colorPrimary: '#28b1ff',
          colorSuccess: '#00cd4c',
          colorWarning: '#826603',
          colorInfo: '#005db1',
          borderRadius: 8,
          fontFamily: "'Open Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif",
        },
      }
    },
      React.createElement(Collections)
    )
  )
)
