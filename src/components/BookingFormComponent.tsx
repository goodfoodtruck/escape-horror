import { FormEvent, useState } from "react"

export const BookingFormComponent = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const userBody = JSON.stringify({name: username, password: password})

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log("Formulaire rempli")
    }

    return (
        <div className="m-4">
            <h2 className="mb-8 text-3xl text-center font-sans font-bold">Formulaire de réservation</h2>
            <form onSubmit={handleSubmit} className="flex flex-col p-8 rounded-lg">
                <input
                    type="text"
                    onChange={e => setUsername(e.target.value)}
                    value={username}
                    className="w-64 md:w-80 m-2 p-2 md:p-1 rounded-md font-sans"
                    name="name"
                    placeholder="Username"
                />
                <input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="w-64 md:w-80 m-2 p-2 md:p-1 rounded-md font-sans"
                    name="password"
                    placeholder="Password"
                />
                <input
                    type="submit"
                    id="button"
                    className="mt-4 mx-auto md:p-2 font-sans cursor-pointer"
                />
            </form>
        </div>
    )
}