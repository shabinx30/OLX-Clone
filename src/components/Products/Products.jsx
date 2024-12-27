import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/search?q=phone")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        return res.json();
      })
      .then((json) => setProducts(json.products))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="px-[10em] pt-5">
      <h1 className="text-2xl font-medium">Fresh recommendations</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-5">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className="w-[17em] bg-white h-[17em] border-2 border-gray-300 rounded-md p-2"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-[70%] object-cover"
              />
              <p className="mt-2 font-bold text-xl">₹{product.price}</p>
              <p className="text-gray-500 text-sm">{product.title}</p>
              <div className="flex text-gray-500 text-[10px] mt-2 justify-between">
                <p>KERALA</p>
                <p>NOV 28</p>
              </div>
            </div>
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </div>
  );
};

export default Products;
