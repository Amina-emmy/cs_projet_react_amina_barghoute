import { useParams } from "react-router-dom";
import "./_ProductDetails.scss"
import { Footer } from "../../layouts/Footer";

export const Product_details=()=>{
    const { id } = useParams();
    return(<>
    <section>
        <div>
        <h1>product details {id}</h1>

        </div>
        <div>
            <Footer />
        </div>
    </section>
    </>)
}