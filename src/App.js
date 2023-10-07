import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/home/Home";
import CartSideBar from "./components/cart/CartSideBar";
import { useSelector } from "react-redux";

function App() {
  const showCart = useSelector((state) => state.cart.show);
  return (
    <section className="overflow-hidden">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/aboudt" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="/:id" element={<ProductDetails />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Notfound />} /> */}
        </Routes>
      </main>
      {showCart && <CartSideBar />}
      <Footer />
    </section>
  );
}

export default App;
