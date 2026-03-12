import React from 'react'
import ReactDOM from 'react-dom/client'
import { MantineProvider, createTheme } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { ModalsProvider } from '@mantine/modals'
import App from './App.tsx'

import '@mantine/core/styles.css'
import '@mantine/notifications/styles.css'
import '@mantine/dates/styles.css'
import './index.css'

const theme = createTheme({
  primaryColor: 'blue',
  colors: {
    blue: [
      '#eef3ff',
      '#dce4f5',
      '#b9c7e2',
      '#94a8ce',
      '#748dba',
      '#5e7aac',
      '#5270a4',
      '#446092',
      '#3c5583',
      '#1c7ed6', // primary blue
    ],
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <Notifications position="top-right" />
      <ModalsProvider>
        <App />
      </ModalsProvider>
    </MantineProvider>
  </React.StrictMode>,
)
