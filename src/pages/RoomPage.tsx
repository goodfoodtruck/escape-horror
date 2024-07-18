import { useContext, useState } from "react"
import { FooterComponent } from "../components/FooterComponent"
import { HeaderComponent } from "../components/HeaderComponent"
import { RoomCardComponent } from "../components/RoomCardComponent"
import { RoomsContext, RoomType, Schedule } from "../contexts/RoomContext"
import { useParams } from "react-router-dom"

export const RoomPage = () => {
    const { index } = useParams()
    const { rooms, updateRooms } = useContext(RoomsContext)
    const room = rooms[Number(index!)]
    const [selectedSchedule, setSelectedSchedule] = useState<Schedule>()
    const [mail, setMail] = useState("")
    const [playersNumber, setPlayersNumber] = useState(room.players)

    const bookARoom = () => {
        const updatedRooms = rooms.map((updatedRoom: RoomType) => {
            if (updatedRoom == room) {
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
        updateRooms(updatedRooms)
    }

    return (
        <div>
            <HeaderComponent />
            <div className="py-36 justify-center">
                <div className="flex w-full justify-center text-white text-center">
                    <RoomCardComponent
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
                <div className="justify-center items-center m-6">
                    <h2 className="font-bold text-white text-2xl my-4">Réservation</h2>
                    <h3 className="font-bold text-white text-lg">Cliquez pour réserver un créneaux (en bleu sont ceux disponibles) :</h3>
                    <div className="flex">
                        {room.schedules.map((schedule) => (
                            <button disabled={schedule.isTaken} className={`${schedule.isTaken ? "bg-slate-300" : "hover:bg-blue-500 bg-blue-400"} rounded-lg px-3 py-1 m-2 text-xl`} onClick={() => setSelectedSchedule(schedule)}>
                                {schedule.time.getHours()}:00
                            </button>
                        ))}
                        <p className="m-3 font-bold text-white text-lg">Créneau choisi : {selectedSchedule ? selectedSchedule.time.getHours() + ":00" : ""}</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-white text-lg">Entrez votre email pour réserver :</h3>
                        <input className="w-64" type="email" value={mail} onChange={(e) => setMail(e.target.value)} />
                    </div>
                    <div>
                        <h3 className="font-bold text-white text-lg">Combien de joueurs serez-vous ? :</h3>
                        <input className="w-64" type="number"
                            value={playersNumber}
                            onChange={(e) => setPlayersNumber(Number(e.target.value) >= room.players ? Number(e.target.value) : playersNumber)}
                        />
                    </div>
                    <button onClick={bookARoom} className="hover:bg-emerald-500 bg-emerald-400 rounded-lg px-3 py-1 m-2 text-xl">Réserver</button>
                </div>
            </div>
            <FooterComponent />
        </div>
    )
}