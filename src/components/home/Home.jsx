import React, { useEffect } from "react";
import Slider from "./Slider";
import { useQuery } from "react-query";
import axios from "axios";
import Product from "../Product";
import Whyme from "./WhyMe";
import Banners from "./Banners";
function Home() {
  const { data, isLoading, isError } = useQuery("products", fetchProducts);

  function fetchProducts() {
    return axios
      .get("https://fakestoreapi.com/products")
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error fetching products</p>;
  }
  console.log("thytytytyty444", data);
  const filteredProducts = data.filter((item) => {
    return (
      item.category === "men's clothing" ||
      item.category === "women's clothing" ||
      item.category === "jewelery"
    );
  });

  const electronics = data.filter((item) => {
    return item.category === "electronics";
  });

  return (
    <div className="home">
      <Slider />
      <section className="py-20">
        <div className="container mx-auto">
          <h1 className="text-3xl font-semibold mb-10 text-center">
            Explore Our Products
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:mx-8 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredProducts.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>

        <Banners />
        <div className="container mx-auto">
          <h1 className="text-3xl font-semibold mb-10 text-center">
            Explore Gadgets
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:mx-8 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {electronics.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
        <Whyme />
      </section>
    </div>
  );
}

export default Home;
