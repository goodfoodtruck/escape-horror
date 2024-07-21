import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { ContactPage } from './pages/ContactPage'
import { RoomPage } from './pages/RoomPage'
import { AdminPage } from './pages/AdminPage'
import { RoomsProvider } from './contexts/RoomContext'
import { AdminProvider } from './contexts/AdminContext'
import { ThemeProvider } from './contexts/ThemeContext'
import { LegalPage } from './pages/LegalPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/room/:index",
    element: <RoomPage />
  },
  {
    path: "/contact",
    element: <ContactPage />
  },
  {
    path: "/admin",
    element: <AdminPage />
  },
  {
    path: "/legal",
    element: <LegalPage />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <RoomsProvider>
      <AdminProvider>
        <ThemeProvider>
            <RouterProvider router={router} />
        </ThemeProvider>
      </AdminProvider>
    </RoomsProvider>
  </React.StrictMode>
)
