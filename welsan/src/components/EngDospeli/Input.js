import { useState } from "react"
import "./input.css"
export default function Input() {

    const [title, setTitle] = useState("");
    const [email, setEmail] = useState("");
    const [body, setBody] = useState("");

    return (
        <>
            <div className="input-container">
                <form id="questions">
                    <input type="text" required id="name" placeholder="Meno" value={title} onChange={(e) => setTitle(e.target.value)} name="message" />
                    <input type="text" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} name="message" />
                    <textarea name="message" id="message" placeholder="Sem napíšte odkaz" cols="30" rows="10" value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                    <button type="submit" className="submit-btn">Submit</button>
                </form>
            </div>
        </>
    )
}