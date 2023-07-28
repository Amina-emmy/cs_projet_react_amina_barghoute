import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Error } from "./Error";
import { Home } from "./pages/home/Home";
import { About } from "./pages/about/About";
import { Product } from "./pages/Product/Product";
import { Contact } from "./pages/Contact/Contact";
import { Header } from "./layouts/Header";
import { Heart } from "./pages/Favorite/Heart";
import { Panier } from "./pages/Panier/Panier";
//^ Women => products images
import wm1 from "./assets/images/products/women/women1.jpg";
import wm2 from "./assets/images/products/women/women2.jpg";
import wm3 from "./assets/images/products/women/women3.jpg";
import wm4 from "./assets/images/products/women/women4.jpg";
//^ Men => products images
import m1 from "./assets/images/products/men/men1.jpg";
import m2 from "./assets/images/products/men/men2.jpg";
import m3 from "./assets/images/products/men/men3.jpg";
import m4 from "./assets/images/products/men/men4.jpg";
//^ Kids => products images
import k1 from "./assets/images/products/kids/kid1.jpg";
import k2 from "./assets/images/products/kids/kid2.jpg";
import k3 from "./assets/images/products/kids/kid3.jpg";
import k4 from "./assets/images/products/kids/kid4.jpg";
import { Product_details } from "./pages/Product_details/Product_details";
// Accessories => products images

export const App = () => {
  //* for shopping
  const product = (src, name, price, wanted, category, tag) => ({
    src,
    name,
    price,
    wanted,
    category,
    tag
  });
  const [products, setProducts] = useState([
    product(wm1, "T-shirt purple", 120, 1, "women", "new"),
    product(wm2, "brown pants", 150, 1, "women", "sale"),
    product(wm3, "Chemise blue", 220, 1, "women", "best seller"),
    product(wm4, "outfit vintage", 70, 1, "women", "old"),

    product(m1, "chemise", 120, 1, "men", "new"),
    product(m2, "chemise noir", 50, 1, "men", "sale"),
    product(m3, "jacket brown", 200, 1, "men", "best seller"),
    product(m4, "jacket cool", 70, 1, "men", "best seller"),

    product(k1, "skirt&coat pink", 120, 1, "kids", "new"),
    product(k2, "skirt&coat green", 50, 1, "kids", "sale"),
    product(k3, "outfit brown", 200, 1, "kids", "best seller"),
    product(k4, "outfit green", 70, 1, "kids", "old")
  ]);

  const [panier, setPanier] = useState(["p"]);
  const [fav, setFav] = useState(["f"]);

  //^ ajouter au panier ou au fav (favorite products)
  const addToPanierOrFav = (tableau, setTableau, index) => {
    if (tableau[0] === panier[0]) {
      if (!tableau.includes(products[index])) {
        setTableau([...tableau, products[index]]);
      } else {
        plusOne(products, setProducts, index);
      }
    } else if (tableau[0] === fav[0]) {
      if (!tableau.includes(products[index])) {
        setTableau([...tableau, products[index]]);
      } else {
        plusOne(products, setProducts, index);
      }
    } 
  }

  //^ + how much you want of a product
  const plusOne = (tab, setTab, index) => {
    let newtab = [...tab];
    newtab[index].wanted += 1;
    setTab(newtab);
  }
  //^ - how much you want of a product
  const moinsOne = (tab, setTab, index) => {
    let newtab = [...tab];
    if (newtab[index].wanted > 1) {
      newtab[index].wanted -= 1;
      setTab(newtab);
    }
  }

  return (
    <>
      <Header panier={panier}/>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home products={products} setProducts={setProducts} />} />
        <Route path="/product" element={<Product products={products} setProducts={setProducts} fav={fav} setFav={setFav} panier={panier} setPanier={setPanier} addToPanierOrFav={addToPanierOrFav} />} />
        <Route path="/product/:id" element={<Product_details products={products} setProducts={setProducts} panier={panier} setPanier={setPanier} addToPanierOrFav={addToPanierOrFav} plusOne={plusOne} moinsOne={moinsOne}/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/heart" element={<Heart fav={fav} setFav={setFav}  products={products}  panier={panier} setPanier={setPanier} addToPanierOrFav={addToPanierOrFav} plusOne={plusOne} moinsOne={moinsOne} />} />
        <Route path="/panier" element={<Panier panier={panier} setPanier={setPanier} plusOne={plusOne} moinsOne={moinsOne} />} />
      </Routes>
    </>
  );
};
