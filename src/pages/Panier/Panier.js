import "./_panier.scss"
import { Footer } from "../../layouts/Footer";

export const Panier = (props) => {
    return (<>
        <section>
            <div className="bgpic">
                <div className="bgtitre text-light"><h1>PANIER</h1></div>
            </div>
            <div className="panierTable my-5 d-flex justify-content-center">
                <table>
                    <thead>
                        {
                            props.panier.length === 0 ?
                                <>
                                <h5 className="opacity-50">Votre panier est encore vide</h5>
                                </>
                                :
                                <>
                                    <tr>
                                        <th className="th_col1"></th>
                                        <th className="th_col2">PRODUCT</th>
                                        <th className="th_col3">PRICE</th>
                                        <th className="th_col4">QUANTITY</th>
                                        <th className="th_col5">TOTAL</th>
                                    </tr>
                                </>
                        }
                    </thead>
                    <tbody>
                        {
                            props.panier.map((element) => <>
                                <tr className="trBorder">
                                    <td className="th_col1"><img src={element.src} alt="" width="110px" /></td>
                                    <td className="th_col2">{element.name}</td>
                                    <td className="th_col3">{element.price} MAD</td>
                                    <td className="th_col4">
                                        <div>
                                            <button>-</button>
                                            <input type="text" value={element.wanted} readOnly />
                                            <button>+</button>
                                        </div>
                                    </td>
                                    <td className="th_col5">
                                        {element.wanted * element.price} MAD
                                    </td>
                                </tr>
                            </>)
                        }
                    </tbody>
                    <tfoot>
                        {
                            props.panier.length === 0 ?
                                <>
                                </>
                                :
                                <>
                                    <tr className="trBorder">
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td className="py-3 ">
                                            <button className="btn btn-dark rounded-pill px-3 py-0 w-75">PROCEED TO PAYEMENT</button>
                                        </td>
                                    </tr>
                                </>
                        }

                    </tfoot>
                </table>

            </div>

            <div>
                <Footer />
            </div>
        </section>
    </>)
}