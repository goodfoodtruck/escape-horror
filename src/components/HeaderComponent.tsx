import { Link } from "react-router-dom"
import { DropdownComponent } from "./DropdownComponent"
import { useContext } from "react"
import { AdminContext } from "../contexts/AdminContext"

export const HeaderComponent = () => {
    const { isAdmin } = useContext(AdminContext)
    return (
        <div className="fantasy flex fixed text-white p-12 w-full justify-around">
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