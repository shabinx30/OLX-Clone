import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const [product, setProduct] = useState({});

  const { id } = useParams();

  useEffect(() => {
    fetch("https://dummyjson.com/products/search?q=phone")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        return res.json();
      })
      .then((json) => {
        console.log("fetch res", json.products);
        for (let i = 0; i < json.products.length; i++) {
          // console.log(json.products[i],id)
          if (json.products[i].id == id) {
            setProduct(json.products[i]);
            break;
          }
        }
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  // console.log(product);

  return (
    <>
      {!product.length ? (
        <div className="pt-2 flex">
        <div className="border-1 border-gray-500 w-[50%] h-full ml-20">
          <img src={product.thumbnail} alt="" className="w-[50vh]" />
        </div>
        <div className="mt-10">
          <h1 className="text-3xl font-bold">₹{product.price}</h1>
          <h1 className="text-xl mt-5">{product.title}</h1>
          <h1 className="text-base text-gray-500 w-[35em]">{product.description}</h1>
          <h1 className="mt-10">Category : <span className="text-lg text-gray-500">{product.category}</span></h1>
        </div>
      </div>
      ):(
        <p>Loding...</p>
      )}
    </>
  );
};

export default Product;
