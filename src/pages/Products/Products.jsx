/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ProductsCard from "./ProductsCard";

const Products = () => {
  const { products } = useLoaderData();
  // console.log(products);
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   fetch("https://dummyjson.com/products")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }, []);
  // console.log(products);
  return (
    <div>
      <h2>Products Pages: {products.length}</h2>
      <div className="grid grid-cols-3 gap-4 p-5">
        {products?.map((product) => (
          <ProductsCard key={product.id} product={product}></ProductsCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
