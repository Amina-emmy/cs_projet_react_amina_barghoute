import "./_Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faPinterestP, faSnapchatGhost, faYoutube } from "@fortawesome/free-brands-svg-icons";
import paypal from "../assets/images/footer/paypal.png";
import visa from "../assets/images/footer/visa.png";
import mastercard from "../assets/images/footer/mastercard.png";
import express from "../assets/images/footer/express.png";
import discover from "../assets/images/footer/discover.png";

export const Footer = () => {

    return (<>
        <footer>
            <div className="d-md-flex justify-content-md-center align-items-md-center divmom">
                <div className="kid1 d-md-flex flex-md-column align-items-center">
                    <div>
                        <h5>GET IN TOUCH</h5>
                    </div>
                    <div className="opacity-50 text-md-center">
                        <p>Lorem erferendis architecto officia ipsum aliquid. Quibusdam ipsum deserunt est?</p>
                    </div>
                    <div className="d-flex gap-1 opacity-50">
                        <div><FontAwesomeIcon icon={faFacebookF} /></div>
                        <div><FontAwesomeIcon icon={faInstagram} /></div>
                        <div><FontAwesomeIcon icon={faPinterestP} /></div>
                        <div><FontAwesomeIcon icon={faSnapchatGhost} /></div>
                        <div><FontAwesomeIcon icon={faYoutube} /></div>
                    </div>
                </div>
                <div className="divkid">
                    <h5>LINKS</h5>
                    <ul className="navbar-nav opacity-50">
                        <li>lorem us</li>
                        <li>lorem us</li>
                        <li>lorem us</li>
                        <li>lorem us</li>
                    </ul>
                </div>
                <div className="divkid">
                    <h5>LINKS</h5>
                    <ul className="navbar-nav opacity-50">
                        <li>lorem us</li>
                        <li>lorem us</li>
                        <li>lorem us</li>
                        <li>lorem us</li>
                    </ul>
                </div>
            </div>
            <div className="d-flex flex-column align-items-center">
                <div className="d-flex gap-1">
                    <img src={paypal} alt="payCards" />
                    <img src={visa} alt="payCards" />
                    <img src={mastercard} alt="payCards" />
                    <img src={express} alt="payCards" />
                    <img src={discover} alt="payCards" />
                </div>
                <div className="opacity-50 mt-1">
                    <p>Copyrights &copy; All rights reserved.</p>
                </div>
            </div>
        </footer>
    </>)
}