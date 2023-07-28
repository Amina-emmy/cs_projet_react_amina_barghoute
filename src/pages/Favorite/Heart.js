import "./_heart.scss"

import { Footer } from "../../layouts/Footer";

export const Heart = (props) => {
    const suppFromFav = (index) => {
        let newfav = [...props.fav];
        newfav.splice(index, 1);
        props.setFav(newfav);
    }
    return (<>
        <section>
            <div className="bgpic">
                <div className="bgtitre text-light"><h1>COUP DE COEUR</h1></div>
            </div>
            <div className="favTable my-5 d-flex justify-content-center">
                <table>
                    <thead>
                        {
                            props.fav.length <= 1 ?
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
                            props.fav.map((element, index) =>
                                index >= 1 ?
                                    <>
                                        <tr className="trBorder">
                                            <td className="th_col1">
                                                <img src={element.src} alt="" width="110px" />
                                                <button className="btn border-0 fs-4 btnRm" onClick={()=>{suppFromFav(index)}}>X</button>
                                            </td>
                                            <td className="th_col2">{element.name}</td>
                                            <td className="th_col3">{element.price} MAD</td>
                                            <td className="th_col4">
                                                <div>
                                                    <button onClick={() => { props.moinsOne(props.fav, props.setFav, index); }}>-</button>
                                                    <input type="text" value={element.wanted} readOnly />
                                                    <button onClick={() => { props.plusOne(props.fav, props.setFav, index); }}>+</button>
                                                </div>
                                            </td>
                                            <td className="th_col5"> {element.wanted * element.price} MAD</td>
                                            <td className="th_col6"><button className="btn btn-dark p-0 px-1 rounded-pill" onClick={() => {
                                                props.addToPanierOrFav(props.panier, props.setPanier, props.products.indexOf(element));
                                                suppFromFav(index);
                                                alert(`Product "${element.name}" is added to your Cart`);
                                            }}> ADD</button></td>
                                        </tr>
                                    </> : <></>)
                        }
                    </tbody>
                    <tfoot>
                        {
                            props.fav.length <= 1 ?
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