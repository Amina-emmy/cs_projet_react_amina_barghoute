import React from "react";
import { Route, Routes } from "react-router-dom";
import { Error } from "./Error";
import { Home } from "./pages/home/Home";
import { About } from "./pages/about/About";
import { Product } from "./pages/Product/Product";
import { Contact } from "./pages/Contact/Contact";
import { Header } from "./layouts/Header";
import { Footer } from "./layouts/Footer";
import {Heart} from "./pages/Favorite/Heart";
import { Panier } from "./pages/Panier/Panier";

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/heart" element={<Heart/>} />
        <Route path="/panier" element={<Panier />} />
      </Routes>
      <Footer />
    </>
  );
};
