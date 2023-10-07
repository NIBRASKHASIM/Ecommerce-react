import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/home/Home";

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
