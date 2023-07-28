import "./_Contact.scss"
import { Footer } from "../../layouts/Footer";

export const Contact = () => {

    return (<>
        <section>
            <div className="bgpic">
                <div className="bgtitre text-light"><h1>CONTACT</h1></div>
            </div>
            <div className="d-flex justify-content-md-center p-5 gap-5 divContact">
                <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1238167.1404295203!2d-74.96847446603562!3d40.76322626048623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259f2a662c113%3A0x3408371cf5760c4!2sfashe!5e0!3m2!1sen!2sma!4v1690400120228!5m2!1sen!2sma" width="440" height="370" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="divContactForm">
                    <h3>Send us your message</h3>
                    <div className="d-flex flex-column">
                    <input type="text" placeholder="Full Name"/>
                    <input type="tel" placeholder="Phone Number"/>
                    <input type="email" placeholder="Email Address"/>
                    <textarea cols="40" rows="4" placeholder="Message"></textarea>
                    </div>
                    <button className="btn btn-dark rounded-pill px-5">SEND</button>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </section>
    </>)
}