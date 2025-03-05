import React, { useEffect, useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate()

  return (
    <div className="px-[2em] md:px-[5em] lg:px-[10em] pt-5">
      

      <h1 className="text-2xl font-medium">Fresh recommendations</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 w-full pt-5">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id}>
              <div className="relative bg-white border-2 border-gray-300 rounded-md p-2">
                <img
                  onClick={() => navigate(`/product/${product?.id}`)}
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-[70%] object-cover"
                />
                <p className="mt-2 font-bold text-xl">₹{((product.price * 83)/4.5).toFixed(2)}</p>
                <p className="text-gray-500 text-sm">{product.title}</p>
                <div className="flex text-gray-500 text-[10px] mt-2 justify-between">
                  <p>KERALA</p>
                  <p>NOV 28</p>
                </div>
              </div>
              {/* <IoMdHeartEmpty className="text-black absolute top-30" /> */}
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
