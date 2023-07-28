import "./_Header.scss";
import { Navigation } from "./Navigation";

export const Header=(props)=>{
    // partie qui affiche les produits en solde
    // le navbar
    return(<>
        <Navigation panier={props.panier}/>
    </>)
}