import Header from "./components/header";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Product from "./components/product";
import Explore from "./components/explore";
import Furniture from "./components/furniture";

export default function Home() {
  return (
<div>
  <Header/>
  <Hero/>
  <Product/>
  <Explore/>
  <Furniture/>
  <Footer/>
</div>
  );
}
