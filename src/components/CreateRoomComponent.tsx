import { useState } from "react"
import { Themes, RoomTheme, Difficulties, Difficulty, RoomType, RoomContextType } from "../contexts/RoomContext"

export const CreateRoomComponent = (props: RoomContextType) => {

    const [title, setTitle] = useState("")
    const [theme, setTheme] = useState(Themes[0])
    const [duration, setDuration] = useState(0)
    const [price, setPrice] = useState(5)
    const [players, setPlayers] = useState(2)
    const [difficulty, setDifficulty] = useState(Difficulties[0])
    
    const handleSubmit = (e: any) => {
        e.preventDefault()
        const newRoom: RoomType = {
            title,
            imageUrl: "maisona.png",
            theme,
            duration,
            price,
            players,
            difficulty
        }
        props.updateRooms([...props.rooms, newRoom])
    }

    return (
        <div className="bg-slate-700 p-6 rounded-lg max-w-lg mx-auto mt-10">
            <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2">Theme: {theme}</label>
                <div className="flex flex-wrap gap-2">
                    {Themes.map((theme: RoomTheme) => (
                        <button 
                            key={theme}
                            className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={() => setTheme(theme)}
                        >
                            {theme}
                        </button>
                    ))}
                </div>
            </div>
            <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2">Titre:</label>
                <input 
                    type="text" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    className="w-full px-3 py-2 text-black rounded border"
                    required 
                />
            </div>
            <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2">Durée:</label>
                <input 
                    type="number" 
                    value={duration} 
                    onChange={(e) => setDuration(Number(e.target.value))} 
                    className="w-full px-3 py-2 text-black rounded border"
                    required 
                />
            </div>
            <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2">Prix:</label>
                <input 
                    type="number" 
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))} 
                    className="w-full px-3 py-2 text-black rounded border"
                    required 
                />
            </div>
            <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2">Nb de joueurs:</label>
                <input 
                    type="number" 
                    value={players} 
                    onChange={(e) => setPlayers(Number(e.target.value))} 
                    className="w-full px-3 py-2 text-black rounded border"
                    required 
                />
            </div>
            <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2">Difficulté: {difficulty}</label>
                <div className="flex flex-wrap gap-2">
                    {Difficulties.map((difficulty: Difficulty) => (
                        <button 
                            key={difficulty}
                            className="btn bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                            onClick={() => setDifficulty(difficulty)}
                        >
                            {difficulty}
                        </button>
                    ))}
                </div>
            </div>
            <button 
                className="btn bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full"
                onClick={handleSubmit}
            >
                + Créer une room
            </button>
        </div>
    )
}