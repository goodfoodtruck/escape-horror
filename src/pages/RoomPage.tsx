import { useContext } from "react"
import { FooterComponent } from "../components/FooterComponent"
import { HeaderComponent } from "../components/HeaderComponent"
import { RoomCardComponent } from "../components/RoomCardComponent"
import { BookingComponent } from "../components/BookingComponent"
import { RoomsContext } from "../contexts/RoomContext"
import { useParams } from "react-router-dom"

export const RoomPage = () => {
    const { index } = useParams()
    const { rooms, updateRooms } = useContext(RoomsContext)
    const room = rooms[Number(index!)]

    return (
        <div>
            <HeaderComponent />
            <div className="py-36 justify-center">
                <div className="flex w-full justify-center text-white text-center">
                    <RoomCardComponent
                        key={rooms.indexOf(room)}
                        imageUrl={room.imageUrl}
                        title={room.title}
                        price={room.price}
                        theme={room.theme}
                        difficulty={room.difficulty}
                        players={room.players}
                        duration={room.duration}
                        schedules={room.schedules}
                    />
                </div>
                <BookingComponent key={index}
                    room={room}
                    rooms={rooms}
                    updateRooms={updateRooms}
                />
            </div>
            <FooterComponent />
        </div>
    )
}