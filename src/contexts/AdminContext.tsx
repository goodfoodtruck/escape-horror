import { createContext, ReactNode, useState } from "react"

export const AdminContext = createContext(false)

export function AdminProvider({ children }: { children: ReactNode }) {
	const [admin, setAdmin] = useState(false);

	return (
		<AdminContext.Provider value={admin}>
			{children}
		</AdminContext.Provider>
	);
}
