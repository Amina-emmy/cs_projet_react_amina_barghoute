import "./_panier.scss"
import { Footer } from "../../layouts/Footer";

export const Panier = () => {
    return (<>
        <section>
            <div className="bgpic">
                <div className="bgtitre text-light"><h1>PANIER</h1></div>
            </div>

            <div>
                <Footer />
            </div>
        </section>
    </>)
}