interface RoomCardProps {
    imageUrl: string
    title: string
    theme: string
    difficulty: string
    players: number
    duration: number
}

export const RoomCardComponent = (props: RoomCardProps) => {
    return (
        <div className="w-1/4 mx-5 bg-cover" style={{backgroundImage: `url(${props.imageUrl})`}}>
            <h4 className="font-bold text-xl mt-16">{props.title}</h4>
            <p className="mt-4 w-fit m-auto p-1 rounder-md text-black bg-red-400"> Theme : {props.theme}</p>
            <div className="my-16">
                <p>Joueurs : {props.players}</p>
                <p>Durée : {props.duration}</p>
                <p>Difficulté : {props.difficulty}</p>
            </div>
        </div>
    )
}