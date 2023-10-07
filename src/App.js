import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/home/Home";
import CartSideBar from "./components/cart/CartSideBar";
import { useSelector } from "react-redux";
import SearchPage from "./components/search/SearchPage";
import ProductDetails from "./components/ProductDetail";

function App() {
  const showCart = useSelector((state) => state.cart.show);
  return (
    <section className="overflow-hidden">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </main>
      {showCart && <CartSideBar />}
      <Footer />
    </section>
  );
}

export default App;
