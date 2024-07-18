import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { RoomsContext } from "../contexts/RoomContext"

export const DropdownComponent = () => {
    const { rooms } = useContext(RoomsContext)
    const [active, setActive] = useState(false)

    return (
        <div onMouseEnter={() => setActive(!active)} onMouseLeave={() => setActive(!active)}>
            <h3 className="text-xl font-bold hover:text-gray-400 hover:cursor-pointer">
                Escape rooms
            </h3>
            {active && (
                <ul>
                    {rooms.map((room) => (
                        <li>
                            <Link
                                className="text-lg font-bold hover:text-gray-400"
                                to={`/room/${rooms.indexOf(room)}`}>{room.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}