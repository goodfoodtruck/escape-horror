import { useState } from "react"
import { Link } from "react-router-dom"

export const DropdownComponent = () => {
    const [active, setActive] = useState(false)

    return (
        <div onMouseEnter={() => setActive(!active)} onMouseLeave={() => setActive(!active)}>
            <h3 className="text-xl font-bold hover:text-gray-400 hover:cursor-pointer">
                Escape rooms
            </h3>
            {active && (
                <ul>
                    <li>
                        <Link
                            className="text-lg font-bold hover:text-gray-400"
                            to="/room/1">La cave du psychopathe
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="text-lg font-bold hover:text-gray-400"
                            to="/room/2">Maison horrifique
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="text-lg font-bold hover:text-gray-400"
                            to="/room/3">Serial-killer en liberté
                        </Link>
                    </li>
                </ul>
            )}
        </div>
    )
}