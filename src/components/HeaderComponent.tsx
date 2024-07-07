import { Link } from "react-router-dom"
import { DropdownComponent } from "./DropdownComponent"

export const HeaderComponent = () => {
    return (
        <div className="fantasy flex fixed text-white p-12 w-full justify-around">
            <Link to="/">
                <h3 className="text-xl font-bold hover:text-gray-400">
                    MAISON HORRIFIQUE
                </h3>
            </Link>
            <DropdownComponent />
            <Link to="/booking">
                <h3 className="text-xl font-bold hover:text-gray-400">
                    Réserver une room
                </h3>
            </Link>
            <Link to="/contact">
                <h3 className="text-xl font-bold hover:text-gray-400">
                    Nous contacter
                </h3>
            </Link>
            <button>
                <h3 className="text-xl font-bold hover:text-gray-400">
                    Admin
                </h3>
            </button>
        </div>
    )
}