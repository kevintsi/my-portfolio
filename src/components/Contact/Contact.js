import { React } from "react"
import "./Contact.css"

const Contact = () => {
    return (
        <section className="contact-container" id="contact">
            <div><h2>Contact</h2></div>
            <div className="contact-main-container">
                <form className="form-container">
                    <div>
                        <input type="text" placeholder="Phil Anthrope" required />
                        <label>Nom</label>
                    </div>

                    <div>
                        <input type="email" placeholder="phil.anthrope@gmail.com" required />
                        <label>Email</label>
                    </div>
                    <div>
                        <textarea rows="5" cols="33" required></textarea>
                        <label>Message</label>
                    </div>

                    <input type="submit" value="Envoyer" />
                </form>
            </div>
        </section>

    )
}

export default Contact