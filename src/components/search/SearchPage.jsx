import React, { useEffect } from "react";

import { useSelector } from "react-redux";
import Product from "../Product";
function SearchPage() {
  const products = useSelector((state) => state.cart.products);
  console.log("oooooooooooooooo", products);
  return (
    <div className="home" style={{marginTop:"100px"}}>
      <section className="py-20">
        <div className="container mx-auto">
          <h1 className="text-3xl font-semibold mb-10 text-center">
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:mx-8 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {products.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default SearchPage;
