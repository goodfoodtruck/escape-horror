import { HeaderComponent } from "../components/HeaderComponent"
import { FooterComponent } from "../components/FooterComponent"
import { useContext } from "react"
import { RoomsContext } from "../contexts/RoomContext"
import { RoomCardComponent } from "../components/RoomCardComponent"
import { CreateRoomComponent } from "../components/CreateRoomComponent"


export const AdminPage = () => {
    const { rooms, updateRooms } = useContext(RoomsContext)

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
            </div>
            <FooterComponent />
        </div>
    )
}