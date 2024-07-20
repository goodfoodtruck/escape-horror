import { createContext, ReactNode, useState } from "react"

type Theme = "white" | "black"

type ThemeContext = {
    theme: Theme
    setTheme: (isTheme: Theme) => void
}

export const ThemeContext = createContext<ThemeContext>(undefined!)

export const ThemeProvider = ({ children }: { children: ReactNode}) => {
  const [theme, setTheme] = useState<Theme>("white")

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <body style={{
          backgroundImage: theme === "white" ? "url('/Background.png')" : "",
          backgroundColor: theme === "white" ? "#211F1F" : "#F1E7DA"
        }}
      >
        {children}
      </body>
    </ThemeContext.Provider>
  )
}