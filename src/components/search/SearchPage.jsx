import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import Product from "../Product";
function SearchPage() {
  const products = useSelector((state) => state.cart.products);
  const [searchData, setSearchData] = useState([]);
  const searchTerm = useSelector((state) => state.search.searchInput);
  useEffect(() => {
    const resultData = products.filter((item) =>
      item.title.includes(searchTerm)
    );
    setSearchData(resultData);
  }, [searchTerm]);
  return (
    <div className="home" style={{ marginTop: "100px", minHeight: "500px" }}>
      <section className="py-20">
        <div className="container mx-auto">
          <h1 className="text-3xl font-semibold mb-10 text-center"></h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:mx-8 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {searchData ? (
              searchData.map((product) => {
                return <Product product={product} key={product.id} />;
              })
            ) : (
              <p style={{ marginTop: "100px" }}>no products found.....</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default SearchPage;
