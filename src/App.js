import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <section className="">
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

      <Footer />
    </section>
  );
}

export default App;
