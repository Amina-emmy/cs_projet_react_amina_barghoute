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
// Accessories => products images

export const App = () => {
  //^ for shopping
  const product =(src, name, price, wanted, category, tag) =>({
    src,
    name,
    price,
    wanted,
    category,
    tag
  });
  const [products,setProducts]=useState([
    product(wm1, "T-shirt purple", 120, 1, "women", "new"),
    product(wm2, "brown pants", 150, 1, "women", "sale"),
    product(wm3, "Chemise blue", 220, 1, "women", "best seller"),
    product(wm4, "outfit vintage", 70, 1, "women", "old"),

    product(m1, "chemise", 120, 1, "men", "new"),
    product(m2, "chemise noir", 50, 1, "men", "sale"),
    product(m3, "jacket brown", 200, 1, "men", "best seller"),
    product(m4, "jacket cool", 70, 1, "men", "old"),

    product(k1,"skirt&coat pink", 120, 1, "kids", "new"),
    product(k2, "skirt&coat green", 50, 1, "kids", "sale"),
    product(k3, "outfit brown", 200, 1, "kids", "best seller"),
    product(k4, "outfit green", 70, 1, "kids", "old")
  ]);
  
  //* tables shopping
  // const [panier,setPanier]=useState([]);
  // const [fav,setFav]=useState([]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product products={products} setProducts={setProducts}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/heart" element={<Heart />} />
        <Route path="/panier" element={<Panier />} />
      </Routes>
    </>
  );
};
