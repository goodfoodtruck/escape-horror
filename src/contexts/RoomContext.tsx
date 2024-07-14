import { createContext, ReactNode, useState } from 'react'

const firstRooms: RoomType[] = [
    {
        title: "Serial-killer en liberté",
        imageUrl: "ville.webp",
        theme: "Crime",
        duration: 60,
        price: 12,
        players: 4,
        difficulty: "Moyenne"
    },
    {
        title: "La maison horrifique",
        imageUrl: "maisona.png",
        theme: "Paranormal",
        duration: 60,
        price: 15,
        players: 4,
        difficulty: "Facile"
    },
    {
        title: "La cave du psychopathe",
        imageUrl: "diris.webp",
        theme: "Horreur psychologique",
        duration: 60,
        price: 12,
        players: 3,
        difficulty: "Difficile"
    }
]

export type Difficulty = "Facile"
                       | "Moyenne"
                       | "Difficile"

export const Difficulties: Difficulty[] = [
    "Facile", "Moyenne", "Difficile"
]

export type RoomTheme = "Horreur"
                      | "Paranormal"
                      | "Peur"
                      | "Crime"
                      | "Horreur psychologique"

export const Themes: RoomTheme[] = [
    "Horreur", "Paranormal", "Peur", "Crime", "Horreur psychologique"
]

export type RoomType = {
    title: string
    imageUrl: string
    theme: RoomTheme
    duration: number
    price: number
    players: number
    difficulty: Difficulty
}

export type RoomContextType = {
	rooms: RoomType[]
  updateRooms: (rooms: RoomType[]) => void
};

export const RoomsContext = createContext<RoomContextType>(undefined!)

export const RoomsProvider = ({ children }: { children: ReactNode}) => {
  const [rooms, setRooms] = useState<RoomType[]>(firstRooms)

  return (
    <RoomsContext.Provider value={{ rooms: rooms, updateRooms: setRooms }}>
      {children}
    </RoomsContext.Provider>
  )
}
