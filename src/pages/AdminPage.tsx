import { HeaderComponent } from "../components/HeaderComponent"
import { FooterComponent } from "../components/FooterComponent"
import { useContext, useEffect, useState } from "react"
import { RoomsContext, RoomType } from "../contexts/RoomContext"
import { RoomCardComponent } from "../components/RoomCardComponent"
import { CreateRoomComponent } from "../components/CreateRoomComponent"
import { CancelBookingComponent } from "../components/CancelBookingComponent"


export const AdminPage = () => {
    const { rooms, updateRooms } = useContext(RoomsContext)
    const [roomsScheduled, setRoomsScheduled] = useState<RoomType[]>([])

    useEffect(() => {
        setRoomsScheduled(rooms.filter(room => room.schedules.some(schedule => schedule.isTaken)))
    }, [rooms])

    return (
        <div className="overflow-auto">
            <HeaderComponent />
            <div className="my-32">
                <h3 className="text-3xl text-white font-bold mx-8">Créer ou modifier une escape room : </h3>
                <CreateRoomComponent
                    rooms={rooms}
                    updateRooms={updateRooms}
                />
                <div className="flex w-full mt-16 justify-center text-white text-center">
                    {rooms.map((room) => (
                        <RoomCardComponent
                            key={room.title}
                            imageUrl={room.imageUrl}
                            title={room.title}
                            price={room.price}
                            theme={room.theme}
                            difficulty={room.difficulty}
                            players={room.players}
                            duration={room.duration}
                            schedules={[]}
                        />
                    ))}
                </div>
                <h3 className="mt-12 text-3xl text-white font-bold mx-8">Les réservations : </h3>
                <CancelBookingComponent
                    roomsScheduled={roomsScheduled}
                    rooms={rooms}
                    updateRooms={updateRooms}
                />
            </div>
            <FooterComponent />
        </div>
    )
}