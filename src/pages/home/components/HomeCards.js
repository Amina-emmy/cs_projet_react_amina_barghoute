import "./_HomeCards.scss"
import card1 from "../../../assets/images/products/accessories/cards1.jpg";
import card2 from "../../../assets/images/products/accessories/c1cp.jpg"
import card3 from "../../../assets/images/products/accessories/cards2.jpg";


export const HomeCards = () => {

    return (<>
        <section>
            <div className="d-md-flex gap-3 m-3 justify-content-md-center">
                <div className="divCard">
                    <img src={card1} alt="coming soon" width="300px" />
                    <button className="btn btn-light rounded-0 btnSoon">COMING SOON</button>
                </div>
                <div className="divCard">
                    <img src={card2} alt="coming soon" width="300px" />
                    <button className="btn btn-light rounded-0 btnSoon">COMING SOON</button>
                </div>
                <div className="divCard">
                    <img src={card3} alt="coming soon" width="300px" />
                    <button className="btn btn-light rounded-0 btnSoon">COMING SOON</button>
                </div>
            </div>
        </section>
    </>)
}