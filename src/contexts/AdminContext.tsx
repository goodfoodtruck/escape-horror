import { createContext, ReactNode, useState } from "react"

type AdminContext = {
    isAdmin: boolean
    setIsAdmin: (isAdmin: boolean) => void
}

export const AdminContext = createContext<AdminContext>(undefined!)

export const AdminProvider = ({ children }: { children: ReactNode}) => {
  const [isAdmin, setIsAdmin] = useState(false)

  return (
    <AdminContext.Provider value={{ isAdmin, setIsAdmin }}>
      {children}
    </AdminContext.Provider>
  )
}