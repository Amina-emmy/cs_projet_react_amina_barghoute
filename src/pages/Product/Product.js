import "./_Product.scss"
import { Footer } from "../../layouts/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export const Product = (props) => {
    //* for showing products based on category
    const [all, setAll] = useState(false);
    const [women, setWomen] = useState(false);
    const [men, setMen] = useState(false);
    const [kids, setKids] = useState(false);
    //* for filtering based on the user research
    const [search, setSearch] = useState("");
    const [filterElement, setFilterElement] = useState([]);

    const searchProduct = (event) => {
        setWomen(false);
        setAll(false);
        setMen(false);
        setKids(false);
        let inpV = event.target.value;
        setSearch(inpV);
        const newProducts = [...props.products];
        const searchedProduct = newProducts.filter((element) => element.name.includes(search));
        setFilterElement(searchedProduct);
    }

    return (<>
        <section>
            <div className="bgpic">
                <div className="bgtitre text-light"><h1>PRODUCT</h1></div>
            </div>
            <div className="d-flex gap-6 justify-content-evenly m-7">
                <div className="ms-8 pe-5 w-25">
                    <div>
                        <h4>Categories</h4>
                        <ul className="navbar-nav">
                            <li className="li_category" onClick={() => {
                                setAll(true);
                                setWomen(false);
                                setMen(false);
                                setKids(false);
                            }}>All</li>
                            <li className="li_category" onClick={() => {
                                setWomen(true);
                                setAll(false);
                                setMen(false);
                                setKids(false);
                            }}>Women</li>
                            <li className="li_category" onClick={() => {
                                setMen(true);
                                setWomen(false);
                                setAll(false);
                                setKids(false);
                            }}>Men</li>
                            <li className="li_category" onClick={() => {
                                setKids(true);
                                setWomen(false);
                                setAll(false);
                                setMen(false);
                            }}>Kids</li>
                        </ul>
                    </div>
                    <div className="mt-3">
                        <h4>Filter</h4>
                        <input type="text" placeholder="Search Products.." name="search" onChange={(event) => {
                            searchProduct(event);
                        }} />
                        <FontAwesomeIcon className="ms-1 opacity-75" icon={faSearch} />
                    </div>
                </div>

                <div className="d-flex flex-wrap gap-2 divallProducts">
                    {
                        (all === true && search ==="") || (all === false && women === false && kids === false && men === false && search ==="") ?
                            <>
                                {props.products.map((element) => <>
                                    <div className="picProduct">
                                        <img src={element.src} alt="" width="200px" />
                                        <h4>{element.name}</h4>
                                        <p>{element.price} MAD</p>
                                        <button className="btnCart btn btn-dark rounded-pill px-3">ADD TO CART</button>
                                        <button className="btnSale btn btn-orange text-light rounded-pill">{element.tag}</button>
                                        <button className="btnFav btn border-0"><FontAwesomeIcon icon={faHeart} className="fs-5" /></button>
                                    </div>
                                </>)}
                            </>
                            : women === true && search ==="" ?
                                <>
                                    {props.products.map((element) =>
                                        element.category === "women" ?
                                            <>
                                                <div className="picProduct">
                                                    <img src={element.src} alt="" width="200px" />
                                                    <h4>{element.name}</h4>
                                                    <p>{element.price} MAD</p>
                                                    <button className="btnCart btn btn-dark rounded-pill px-3">ADD TO CART</button>
                                                    <button className="btnSale btn btn-orange text-light rounded-pill">{element.tag}</button>
                                                    <button className="btnFav btn border-0"><FontAwesomeIcon icon={faHeart} className="fs-5" /></button>
                                                </div>
                                            </> : <></>)}
                                </>
                                : men === true && search ==="" ?
                                    <>
                                        {props.products.map((element) =>
                                            element.category === "men" ?
                                                <>
                                                    <div className="picProduct">
                                                        <img src={element.src} alt="" width="200px" />
                                                        <h4>{element.name}</h4>
                                                        <p>{element.price} MAD</p>
                                                        <button className="btnCart btn btn-dark rounded-pill px-3">ADD TO CART</button>
                                                        <button className="btnSale btn btn-orange text-light rounded-pill">{element.tag}</button>
                                                        <button className="btnFav btn border-0"><FontAwesomeIcon icon={faHeart} className="fs-5" /></button>
                                                    </div>
                                                </> : <></>)}
                                    </>
                                    : kids === true && search ==="" ?
                                        <>
                                            {props.products.map((element) =>
                                                element.category === "kids" ?
                                                    <>
                                                        <div className="picProduct">
                                                            <img src={element.src} alt="" width="200px" />
                                                            <h4>{element.name}</h4>
                                                            <p>{element.price} MAD</p>
                                                            <button className="btnCart btn btn-dark rounded-pill px-3">ADD TO CART</button>
                                                            <button className="btnSale btn btn-orange text-light rounded-pill">{element.tag}</button>
                                                            <button className="btnFav btn border-0"><FontAwesomeIcon icon={faHeart} className="fs-5" /></button>
                                                        </div>
                                                    </> : <></>)}
                                        </>
                                        :
                                        <>
                                        </>
                    }
                    <div className="d-flex flex-wrap gap-2 w-50">
                        {filterElement.map((element) =>
                            <>
                                <div className="picProduct">
                                    <img src={element.src} alt="" width="200px" />
                                    <h4>{element.name}</h4>
                                    <p>{element.price} MAD</p>
                                    <button className="btnCart btn btn-dark rounded-pill px-3">ADD TO CART</button>
                                    <button className="btnSale btn btn-orange text-light rounded-pill">{element.tag}</button>
                                    <button className="btnFav btn border-0"><FontAwesomeIcon icon={faHeart} className="fs-5" /></button>
                                </div>
                            </>)}
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </section>
    </>)
}