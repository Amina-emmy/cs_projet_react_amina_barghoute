import { NavLink } from "react-router-dom"
import logo from "../assets/images/logo.png.webp"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBagShopping } from "@fortawesome/free-solid-svg-icons"
import { faHeart } from "@fortawesome/free-regular-svg-icons"
import { useState } from "react"

export const Navigation = (props) => {
    
    let total = 0;
    return (
        <>
            <nav className="py-lg-2 px-lg-2 d-flex justify-content-between align-items-center">
                <div>
                    <NavLink className="nav-link" to={"/"}>
                        <img src={logo} alt="logo" />
                    </NavLink>
                </div>
                <div className="d-flex gap-2">
                    <NavLink className="nav-link" to={"/"}>Home</NavLink>
                    <NavLink className="nav-link" to={"/product"}>Product</NavLink>
                    <NavLink className="nav-link" to={"/about"}>About</NavLink>
                    <NavLink className="nav-link" to={"/contact"}>Contact</NavLink>
                </div>
                <div className="d-flex gap-1 align-items-center">
                    <NavLink className="nav-link" to={"/heart"}>
                        <FontAwesomeIcon icon={faHeart} className="fs-6" />
                    </NavLink>
                    <span className="opacity-50">|</span>
                    <div className="">
                        <div className="dropdown">
                            <button className="btn border-0 position-relative" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <FontAwesomeIcon icon={faBagShopping} className="fs-4" />
                                {
                                    props.panier.length > 1 ?
                                        <>
                                            <div className="cartNotif text-light rounded-circle">
                                                {props.panier.length - 1}
                                            </div>
                                        </>:<></>
                                }
                            </button>
                            <ul className="dropdown-menu">
                                <li>
                                    <div className="cartBar">
                                        <div className="cartProducts">
                                            {
                                                props.panier.map((element, index) =>
                                                    element !== "p" ?
                                                        <div className="cartProduct d-flex gap-1 align-items-center">
                                                            <div><img src={element.src} alt="" width="80px" height="90px" /></div>
                                                            <div className="pt-5">
                                                                <h5 className="fw-bold">{element.name}</h5>
                                                                <p className="opacity-50">{element.wanted} x {element.price} MAD</p>
                                                                <p className="opacity-0">{total = total + (element.wanted * element.price)}</p>
                                                            </div>
                                                        </div>
                                                        : props.panier.length === 1 ?
                                                            <>
                                                                <div className="text-center opacity-50">Panier est vide</div>
                                                            </> : <></>
                                                )
                                            }
                                        </div>
                                        <div>
                                            <div className="d-flex justify-content-end pe-2 ">
                                                <h6 className="fw-bold pt-1">Total:  {total} MAD</h6>
                                            </div>
                                            <div className="d-flex justify-content-center pt-1">
                                                <NavLink className="nav-link" to={"/panier"}>
                                                    <button className="btn btn-dark rounded-pill fw-bold">VIEW PANIER</button>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            {/* //* Nav Tablet */}

        </>
    )
}
