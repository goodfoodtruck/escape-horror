import { useContext, useState } from "react"
import { RoomType, Schedule } from "../contexts/RoomContext"
import { ThemeContext } from "../contexts/ThemeContext"

type BookingRoomProps = {
    room: RoomType
    rooms: RoomType[]
    updateRooms: (rooms: RoomType[]) => void
}

export const BookingComponent = (props: BookingRoomProps) => {
    const { theme } = useContext(ThemeContext)
    const [selectedSchedule, setSelectedSchedule] = useState<Schedule>()
    const [mail, setMail] = useState("")
    const [playersNumber, setPlayersNumber] = useState(props.room.players)

    const bookARoom = () => {
        const updatedRooms = props.rooms.map((updatedRoom: RoomType) => {
            if (updatedRoom == props.room) {
                const updatedSchedules = updatedRoom.schedules.map((updatedSchedule: Schedule) => {
                    if (updatedSchedule == selectedSchedule) {
                        return {
                            ...updatedSchedule,
                            isTaken: true,
                            email: mail,
                            players: playersNumber
                        }
                    }
                    return updatedSchedule
                })
                return {...updatedRoom, schedules: updatedSchedules}
            }
            return updatedRoom
        })
        props.updateRooms(updatedRooms)
    }
    
    return (
        <div className="justify-center items-center m-6">
            <h2 className={`font-bold text-${theme} text-2xl my-4`}>Réservation</h2>
            <h3 className={`font-bold text-${theme} text-lg`}>Cliquez pour réserver un créneaux (en bleu sont ceux disponibles) :</h3>
            <div className="flex">
                {props.room.schedules.map((schedule) => (
                    <button key={schedule.time.getHours()} disabled={schedule.isTaken} className={`${schedule.isTaken ? "bg-slate-300" : "hover:bg-blue-500 bg-blue-400"} rounded-lg px-3 py-1 m-2 text-xl`} onClick={() => setSelectedSchedule(schedule)}>
                        {schedule.time.getHours()}:00
                    </button>
                ))}
                <p className={`m-3 font-bold text-${theme} text-lg`}>Créneau choisi : {selectedSchedule ? selectedSchedule.time.getHours() + ":00" : ""}</p>
            </div>
            <div>
                <h3 className={`font-bold text-${theme} text-lg`}>Entrez votre email pour réserver :</h3>
                <input className="w-64" type="email" value={mail} onChange={(e) => setMail(e.target.value)} />
            </div>
            <div>
                <h3 className={`font-bold text-${theme} text-lg`}>Combien de joueurs serez-vous ? :</h3>
                <input className="w-64" type="number"
                    value={playersNumber}
                    onChange={(e) => setPlayersNumber(Number(e.target.value) >= props.room.players ? Number(e.target.value) : playersNumber)}
                />
            </div>
            <button onClick={bookARoom} className="hover:bg-emerald-500 bg-emerald-400 rounded-lg px-3 py-1 m-2 text-xl">Réserver</button>
        </div>
    )
}