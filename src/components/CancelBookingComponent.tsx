import { useContext } from "react"
import { RoomType, Schedule } from "../contexts/RoomContext"
import { ThemeContext } from "../contexts/ThemeContext"

type CancelBookingType = {
    roomsScheduled: RoomType[]
    rooms: RoomType[]
    updateRooms: (rooms: RoomType[]) => void
}

export const CancelBookingComponent = (props: CancelBookingType) => {
    const { theme } = useContext(ThemeContext)

    const cancelSchedule = (roomScheduled: RoomType, scheduleCanceled: Schedule) => {
        const updatedRooms = props.rooms.map((room) => {
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
        props.updateRooms(updatedRooms)
    }

    return (
        <div className="w-fit">
            {props.roomsScheduled.map((room) => (
                <div className="m-8">
                    <h4 className={`mt-12 text-xl text-${theme} fantasy`}>{room.title}</h4>
                    {room.schedules.filter(schedule => schedule.isTaken).map((schedule) => (
                        <div key={schedule.time.getHours()} className="flex justify-end w-100">
                            <div className="bg-slate-300 rounded-lg px-3 py-1 m-2 text-xl">{schedule.email}</div>
                            <p className={`text-${theme} px-3 py-1 m-2 text-xl`}>Nombre de joueurs : </p>
                            <div className="bg-slate-300 rounded-lg px-3 py-1 m-2 text-xl">{schedule.players}</div>
                            <p className={`text-${theme} px-3 py-1 m-2 text-xl`}>Horaire : </p>
                            <div className="bg-slate-300 rounded-lg px-3 py-1 m-2 text-xl">
                                {schedule.time.getHours()}:00
                            </div>
                            <button onClick={() => cancelSchedule(room, schedule) } className="bg-red-500 hover:bg-red-600 rounded-lg px-3 py-1 m-2 text-xl">X</button>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}