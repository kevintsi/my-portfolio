import { React, useState } from "react"
import emailjs from "@emailjs/browser"
import "./Contact.css"

const Contact = () => {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [message, setMessage] = useState("")
    const [subject, setSubject] = useState("")

    const sendEmail = (e) => {
        e.preventDefault();
        if (email.length === 0 || name.length === 0 || message.length === 0 || subject.length === 0) return;

        console.log("send email")

        emailjs.send("service_tsxysdm", "template_5p6l6pm", {
            name: name,
            subject: subject,
            from_email: email,
            message: message,
        }, "IhR4h1BDcR_36ILmp");

        setEmail("")
        setName("")
        setMessage("")
        setSubject("")

        alert("Mail envoyé avec succès")
    };




    return (
        <section className="contact-container" id="contact">
            <h1 className="section-title">Contact</h1>
            <div className="contact-main-container">
                <form method="post" className="form-container" onSubmit={sendEmail}>
                    <div>
                        <label>Nom</label>
                        <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Phil Anthrope" required />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="phil.anthrope@gmail.com" required />
                    </div>
                    <div>
                        <label>Sujet</label>
                        <input type="text" value={subject} onChange={e => setSubject(e.target.value)} placeholder="Offre..." required />
                    </div>
                    <div>
                        <label>Message</label>
                        <textarea rows="5" cols="33" value={message} onChange={e => setMessage(e.target.value)} required></textarea>
                    </div>
                    <input type="submit" value="Envoyer" />
                </form>
            </div>
        </section>

    )
}

export default Contact