import { createContext, ReactNode, useState } from 'react'

export function todayAt(hour: number) {
  const today = new Date()
  today.setHours(hour)
  return today
}

const firstRooms: RoomType[] = [
    {
        title: "Serial-killer en liberté",
        imageUrl: "ville.webp",
        theme: "Crime",
        duration: 60,
        price: 12,
        players: 4,
        difficulty: "Moyenne",
        schedules: [
          {isTaken: false, time: todayAt(8)},
          {isTaken: false, time: todayAt(10)},
          {isTaken: false, time: todayAt(12)},
          {isTaken: false, time: todayAt(14)},
          {isTaken: false, time: todayAt(16)},
          {isTaken: false, time: todayAt(18)},
        ]
    },
    {
        title: "La maison horrifique",
        imageUrl: "maisona.png",
        theme: "Paranormal",
        duration: 60,
        price: 15,
        players: 4,
        difficulty: "Facile",
        schedules: [
          {isTaken: false, time: todayAt(8)},
          {isTaken: false, time: todayAt(10)},
          {isTaken: false, time: todayAt(12)},
          {isTaken: false, time: todayAt(14)},
          {isTaken: false, time: todayAt(16)},
          {isTaken: false, time: todayAt(18)},
        ]
    },
    {
        title: "La cave du psychopathe",
        imageUrl: "diris.webp",
        theme: "Horreur psychologique",
        duration: 60,
        price: 12,
        players: 3,
        difficulty: "Difficile",
        schedules: [
          {isTaken: false, time: todayAt(8)},
          {isTaken: false, time: todayAt(10)},
          {isTaken: false, time: todayAt(12)},
          {isTaken: false, time: todayAt(14)},
          {isTaken: false, time: todayAt(16)},
          {isTaken: false, time: todayAt(18)},
        ]
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

export type Schedule = {
  time: Date
  isTaken: boolean
  email?: string
  players?: number
}

export type RoomType = {
    title: string
    imageUrl: string
    theme: RoomTheme
    duration: number
    price: number
    players: number
    difficulty: Difficulty
    schedules: Schedule[]
}

export type RoomContextType = {
	rooms: RoomType[]
  updateRooms: (rooms: RoomType[]) => void
}

export const RoomsContext = createContext<RoomContextType>(undefined!)

export const RoomsProvider = ({ children }: { children: ReactNode}) => {
  const [rooms, setRooms] = useState<RoomType[]>(firstRooms)

  return (
    <RoomsContext.Provider value={{ rooms: rooms, updateRooms: setRooms }}>
      {children}
    </RoomsContext.Provider>
  )
}
