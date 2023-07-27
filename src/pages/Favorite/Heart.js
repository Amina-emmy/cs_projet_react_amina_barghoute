import "./_heart.scss"

import { Footer } from "../../layouts/Footer";

export const Heart=(props)=>{
    return(<>
        <section>
        <div className="bgpic">
        <div className="bgtitre text-light"><h1>COUP DE COEUR</h1></div>
        </div>
        <div className="favTable my-5 d-flex justify-content-center">
                <table>
                    <thead>
                        {
                            props.fav.length === 0 ?
                                <>
                                <h5 className="opacity-50">No favorite products yet</h5>
                                </>
                                :
                                <>
                                    <tr>
                                        <th className="th_col1"></th>
                                        <th className="th_col2">PRODUCT</th>
                                        <th className="th_col3">PRICE</th>
                                        <th className="th_col4">QUANTITY</th>
                                        <th className="th_col5">TOTAL</th>
                                        <th className="th_col6">ADD</th>
                                    </tr>
                                </>
                        }
                    </thead>
                    <tbody>
                        {
                            props.fav.map((element) => <>
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
                                    <td className="th_col5"> {element.wanted * element.price} MAD</td>
                                    <td className="th_col6"><button className="btn btn-dark p-0 px-1 rounded-pill">ADD</button></td>
                                </tr>
                            </>)
                        }
                    </tbody>
                    <tfoot>
                        {
                            props.fav.length === 0 ?
                                <>
                                </>
                                :
                                <>
                                    <tr className="trBorder">
                                        <td className="py-2 ">
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