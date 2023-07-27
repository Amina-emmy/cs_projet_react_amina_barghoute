import { Footer } from "../../layouts/Footer";
import { HomeCards } from "./components/HomeCards";

import { HomeCarrousel } from "./components/HomeCarrousel";
import { HomeTabtags } from "./components/HomeTabtags";

export const Home = (props) => {
  return (
    <>

      <HomeCarrousel />
      <HomeCards />
      <HomeTabtags products={props.products} setProducts={props.setProducts} />
      {/* video */}
      <Footer />

    </>
  );
};
