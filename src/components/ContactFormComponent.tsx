import { useContext, useState } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

export const ContactFormComponent = () => {
    const { theme } = useContext(ThemeContext)
    const [fullname, setFullname] = useState("")
    const [mail, setMail] = useState("")
    const [content, setContent] = useState("")
    const [sent, setSent] = useState(false)

    return (
        <div className={`p-52 text-${theme}`}>
            <h2 className="mb-8 text-3xl text-center font-sans font-bold">Formulaire de contact</h2>
            <div className="flex flex-col p-8 rounded-lg text-black">
                <input
                    type="text"
                    onChange={e => setFullname(e.target.value)}
                    value={fullname}
                    className="w-64 m-2 p-2 md:p-1 rounded-md font-sans"
                    name="fullname"
                    placeholder="Votre nom"
                />
                <input
                    type="mail"
                    value={mail}
                    onChange={e => setMail(e.target.value)}
                    className="w-64 m-2 p-2 md:p-1 rounded-md font-sans"
                    name="mail"
                    placeholder="Email"
                />
                <textarea
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    className="md:w-80 m-2 p-2 md:p-1 rounded-md font-sans"
                    name="content"
                    placeholder="Votre message..."
                />
                <button
                    onClick={() => setSent(true)}
                    className={`btn ${sent ? "bg-gray-300" : "bg-blue-500 hover:bg-blue-700"} font-bold py-2 px-4 rounded w-full`}
                    disabled={sent}>
                    Envoyer
                </button>
            </div>
        </div>
    )
}