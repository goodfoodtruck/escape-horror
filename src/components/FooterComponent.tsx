import { useContext } from "react"
import { Link } from "react-router-dom"
import { RoomsContext } from "../contexts/RoomContext"

export const FooterComponent = () => {
    const {rooms} = useContext(RoomsContext)

    return (
        <div className="flex justify-around bg-stone-900 text-white p-10">
            <div className="inline-grid">
                {rooms.map((room) => (
                    <Link to={`/room/${rooms.indexOf(room)}`}>{room.title}</Link>
                ))}
            </div>
            <div className="">
                <Link to="/contact">Contactez-nous !</Link>
                <br></br>
                <span>Appelez au 06 00 00 00 00</span>
                <br></br>
                <span>La Maison Horrifique se situe 666 Chemin des barbelés</span>  
                <br></br>
                <span>92600 Asnières-sur-Seine</span>
                <br></br>
                <div className="flex brightness-50 h-10 self-center">
                    <h3>Rejoignez-nous sur les réseaux !</h3>
                    <a className="mx-4" href=""><img className="h-full" src="/instagram.webp" /></a>
                    <a href="mx-4"><img className="h-full" src="/facebook.webp" /></a>
                </div>
            </div>
        </div>
    )
}