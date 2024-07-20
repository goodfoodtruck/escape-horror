import { Link } from "react-router-dom"
import { DropdownComponent } from "./DropdownComponent"
import { useContext } from "react"
import { AdminContext } from "../contexts/AdminContext"
import { ThemeContext } from "../contexts/ThemeContext"

export const HeaderComponent = () => {
    const { theme, setTheme } = useContext(ThemeContext)
    const { isAdmin, setIsAdmin } = useContext(AdminContext)
    return (
        <div className={`fantasy flex fixed text-${theme} p-12 w-full justify-around`}>
            <button className="hover:bg-blue-500 bg-blue-400 rounded-lg px-3 text-xl" onClick={() => setIsAdmin(!isAdmin)}>Mode admin</button>
            <button className="hover:bg-blue-500 bg-blue-400 rounded-lg px-3 text-xl" onClick={() => setTheme(theme === "white" ? "black" : "white")}>Light/Dark mode</button>
            <Link to="/">
                <h3 className="text-xl font-bold hover:text-gray-400">
                    MAISON HORRIFIQUE
                </h3>
            </Link>
            <DropdownComponent />
            <Link to="/contact">
                <h3 className="text-xl font-bold hover:text-gray-400">
                    Nous contacter
                </h3>
            </Link>
            {isAdmin && (
                <Link to="/admin">
                    <h3 className="text-xl font-bold hover:text-gray-400">
                        Admin
                    </h3>
                </Link>
            )}
        </div>
    )
}