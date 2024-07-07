import { FormEvent, useState } from "react"

export const ContactFormComponent = () => {
    const [fullname, setFullname] = useState("")
    const [mail, setMail] = useState("")
    const [content, setContent] = useState("")
    const userBody = JSON.stringify({fullname, mail, content})

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log("Formulaire rempli")
    }

    return (
        <div className="m-4">
            <h2 className="mb-8 text-3xl text-center font-sans font-bold">Formulaire de contact</h2>
            <form onSubmit={handleSubmit} className="flex flex-col p-8 rounded-lg">
                <input
                    type="text"
                    onChange={e => setFullname(e.target.value)}
                    value={fullname}
                    className="w-64 md:w-80 m-2 p-2 md:p-1 rounded-md font-sans"
                    name="fullname"
                    placeholder="Votre nom"
                />
                <input
                    type="mail"
                    value={mail}
                    onChange={e => setMail(e.target.value)}
                    className="w-64 md:w-80 m-2 p-2 md:p-1 rounded-md font-sans"
                    name="mail"
                    placeholder="Email"
                />
                <input
                    type="text"
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    className="w-64 md:w-80 m-2 p-2 md:p-1 rounded-md font-sans"
                    name="content"
                    placeholder="Votre message..."
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