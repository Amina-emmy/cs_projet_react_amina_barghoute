import "./_HomeTabtags.scss";
import { NavLink } from "react-router-dom";

export const HomeTabtags = (props) => {

    return (<>
        <section>
            <h3 className="fw-bold text-center pt-5">OUR PRODUCTS</h3>
            <div className="d-flex flex-column align-items-center m-2 pb-5">
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="btnTag active" id="pills-bs-tab" data-bs-toggle="pill" data-bs-target="#pills-bs" type="button" role="tab" aria-controls="pills-bs" aria-selected="true">
                            Best Seller
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="btnTag" id="pills-new-tab" data-bs-toggle="pill" data-bs-target="#pills-new" type="button" role="tab" aria-controls="pills-new" aria-selected="false" >
                            New
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="btnTag" id="pills-sale-tab" data-bs-toggle="pill" data-bs-target="#pills-sale" type="button" role="tab" aria-controls="pills-sale" aria-selected="false">
                            Sale
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="btnTag" id="pills-old-tab" data-bs-toggle="pill" data-bs-target="#pills-old" type="button" role="tab" aria-controls="pills-old" aria-selected="false">
                            Old
                        </button>
                    </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-bs" role="tabpanel" aria-labelledby="pills-bs-tab" tabIndex={0}>
                        <div className="d-flex gap-1">
                            {props.products.map((element) =>
                                element.tag === "best seller" ?
                                    <>
                                        <NavLink className="nav-link" to={`/product/${element.name}`}>
                                            <div className="picProduct">
                                                <img src={element.src} alt="" width="200px" />
                                                <h4>{element.name}</h4>
                                                <p>{element.price} MAD</p>
                                                <button className="btnSale btn btn-orange text-light rounded-pill">{element.tag}</button>
                                            </div>
                                        </NavLink>
                                    </> : <></>)}
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-new" role="tabpanel" aria-labelledby="pills-new-tab" tabIndex={0} >
                        <div className="d-flex gap-1">
                            {props.products.map((element) =>
                                element.tag === "new" ?
                                    <>
                                        <NavLink className="nav-link" to={`/product/${element.name}`}>
                                            <div className="picProduct">
                                                <img src={element.src} alt="" width="200px" />
                                                <h4>{element.name}</h4>
                                                <p>{element.price} MAD</p>
                                                <button className="btnSale btn btn-orange text-light rounded-pill">{element.tag}</button>
                                            </div>
                                        </NavLink>
                                    </> : <></>)}
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-sale" role="tabpanel" aria-labelledby="pills-sale-tab" tabIndex={0}>
                        <div className="d-flex gap-1">
                            {props.products.map((element) =>
                                element.tag === "sale" ?
                                    <>
                                        <NavLink className="nav-link" to={`/product/${element.name}`}>
                                            <div className="picProduct">
                                                <img src={element.src} alt="" width="200px" />
                                                <h4>{element.name}</h4>
                                                <p>{element.price} MAD</p>
                                                <button className="btnSale btn btn-orange text-light rounded-pill">{element.tag}</button>
                                            </div>
                                        </NavLink>
                                    </> : <></>)}
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-old" role="tabpanel" aria-labelledby="pills-old-tab" tabIndex={0}>
                        <div className="d-flex gap-1">
                            {props.products.map((element) =>
                                element.tag === "old" ?
                                    <>
                                        <NavLink className="nav-link" to={`/product/${element.name}`}>
                                            <div className="picProduct">
                                                <img src={element.src} alt="" width="200px" />
                                                <h4>{element.name}</h4>
                                                <p>{element.price} MAD</p>
                                                <button className="btnSale btn btn-orange text-light rounded-pill">{element.tag}</button>
                                            </div>
                                        </NavLink>
                                    </> : <></>)}
                        </div>
                    </div>
                </div>
            </div>


        </section>
    </>)
}