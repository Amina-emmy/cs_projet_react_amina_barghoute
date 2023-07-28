import { useParams } from "react-router-dom";
import "./_ProductDetails.scss"
import { Footer } from "../../layouts/Footer";

export const Product_details = (props) => {
    const { id } = useParams();
    return (<>
        <section>
            <div className="divParentPD p-4">
                <div className="divPD p-3 border">
                    {
                        props.products.map((element, index) =>
                            element.name === id ?
                                <>
                                    <div className="d-flex gap-3 justify-content-evenly">
                                        <div><img src={element.src} alt="" width="350px" /></div>
                                        <div>
                                            <h1 className="text-gg"> {element.name}</h1>
                                            <div className="d-flex gap-1 ps-1">
                                                <h6>Category :</h6><span>{element.category}</span>
                                            </div>
                                            <div className="pt-3 ps-1">
                                                <h6>About the Product :</h6>
                                                <p className="opacity-75 ">
                                                    ibusm xcepturi sunt quos delectus ducimus earum deleniti? Mollitia voluptates ipsam doloribus ab. Necessitatibus totam ipsum, voluptatem, sit aliquam ipsa sint, ad eos exercitationem voluptas magni? Voluptates non iste, obcaecati veritatis recusandae saepe? Velit odit aspernatur, natus ratione at sint, delectus quisquam illum accusamus, corporis totam?
                                                </p>
                                            </div>
                                            <div className="text-orange pt-2 ps-3">
                                                <h2>{element.price * element.wanted} MAD</h2>
                                            </div>
                                            <div className="pt-1 nbrProduct ps-3">
                                                <button onClick={() => { props.moinsOne(props.products,props.setProducts,index) }}>-</button>
                                                <input type="text" value={element.wanted} readOnly />
                                                <button onClick={() => { props.plusOne(props.products,props.setProducts,index) }}>+</button>
                                            </div>
                                            <div className="pt-3 text-center">
                                                <button className="btn btn-dark px-5 rounded-pill" onClick={() => { props.addToPanierOrFav(props.panier, props.setPanier, index); alert(`Product "${element.name}" is added to your Cart`); }}>
                                                ADD TO CART</button>
                                            </div>
                                        </div>
                                    </div>
                                </> : <></>)
                    }
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </section>
    </>)
}