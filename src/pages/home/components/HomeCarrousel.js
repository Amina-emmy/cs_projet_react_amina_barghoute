import slide1 from "../../../assets/images/home/carrousel1cp.png"
import slide2 from "../../../assets/images/home/master-slide-02.jpg"
import slide3 from "../../../assets/images/home/main_carousel.jpg"
import { NavLink } from "react-router-dom"

export const HomeCarrousel = () => {


    return (<>
        <section>
            <div
                id="carouselExampleInterval"
                className="carousel slide caro"
                data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval={3000}>
                        <img src={slide1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval={3000}>
                        <img src={slide2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval={3000}>
                        <img src={slide3} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleInterval"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleInterval"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>

                <div className="caroText text-light text-center">
                    <h1>LEATHER BAGS</h1>
                    <p>New Colletion</p>
                    <NavLink to={"/product"}><button className="btn btn-light rounded-pill px-md-3">SHOP NOW</button></NavLink>
                </div>
            </div>
        </section>
    </>)
}