import { HeaderComponent } from "../components/HeaderComponent"
import { FooterComponent } from "../components/FooterComponent"
import { useContext, useEffect, useState } from "react"
import { RoomsContext, RoomType, Schedule } from "../contexts/RoomContext"
import { RoomCardComponent } from "../components/RoomCardComponent"
import { CreateRoomComponent } from "../components/CreateRoomComponent"


export const AdminPage = () => {
    const { rooms, updateRooms } = useContext(RoomsContext)
    const [roomsScheduled, setRoomsScheduled] = useState<RoomType[]>([])

    useEffect(() => {
        setRoomsScheduled(rooms.filter(room => room.schedules.some(schedule => schedule.isTaken)))
    }, [rooms])

    const cancelSchedule = (roomScheduled: RoomType, scheduleCanceled: Schedule) => {
        const updatedRooms = rooms.map((room) => {
            if (room == roomScheduled) {
                room.schedules = room.schedules.map((schedule) => {
                    if (schedule == scheduleCanceled) {
                        return {...schedule, isTaken: false, email: "", players: room.players}
                    }
                    return schedule
                })
            }
            return room
        })
        updateRooms(updatedRooms)
    }

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
                <h3 className="mt-12 text-3xl text-white font-bold mx-8">Les réservations : </h3>
                {roomsScheduled.map((roomScheduled) => (
                    <div className="m-8">
                        <h4 className="mt-12 text-xl text-white fantasy">{roomScheduled.title}</h4>
                        {roomScheduled.schedules.filter(schedule => schedule.isTaken).map((schedule) => (
                            <div className="flex">
                                <div className={`${schedule.isTaken ? "bg-slate-300" : "hover:bg-blue-500 bg-blue-400"} rounded-lg px-3 py-1 m-2 text-xl`}>
                                    {schedule.time.getHours()}:00
                                </div>
                                <button onClick={() => cancelSchedule(roomScheduled, schedule) } className="bg-red-500 hover:bg-red-600 rounded-lg px-3 py-1 m-2 text-xl">X</button>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <FooterComponent />
        </div>
    )
}