import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { ContactPage } from './pages/ContactPage'
import { BookingPage } from './pages/BookingPage'
import { RoomPage } from './pages/RoomPage'
import { AdminPage } from './pages/AdminPage'
import { RoomsProvider } from './contexts/RoomContext'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/room/:id",
    element: <RoomPage />
  },
  {
    path: "/contact",
    element: <ContactPage />
  },
  {
    path: "/booking",
    element: <BookingPage />
  },
  {
    path: "/admin",
    element: <AdminPage />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <RoomsProvider>
      <RouterProvider router={router} />
    </RoomsProvider>
  </React.StrictMode>
)
