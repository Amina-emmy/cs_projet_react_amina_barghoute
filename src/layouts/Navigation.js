import { NavLink } from "react-router-dom"
import logo from "../assets/images/logo.png.webp"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBagShopping } from "@fortawesome/free-solid-svg-icons"
import { faHeart } from "@fortawesome/free-regular-svg-icons"

export const Navigation = () => {
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
                        <FontAwesomeIcon icon={faHeart} className="fs-6"/>
                    </NavLink>
                    <span className="opacity-50">|</span>
                    <NavLink className="nav-link" to={"/panier"}>
                        <FontAwesomeIcon icon={faBagShopping} className="fs-4"/>
                    </NavLink>
                </div>
            </nav>
            {/* //* Nav Tablet */}
            
        </>
    )
}
