"use client";

import React, { useEffect, useState } from "react";
import Container from "../Container";
import ProductBox from "../ProductBox";

function RecenlyAdded() {
  const [products, setProduct] = useState([]);

  const getProducts = async () => {
    const response = await fetch(
      "https://fakestoreapi.com/products?limit=5"
    );
    const data = await response.json();
    console.log(data);
    setProduct(data)
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="bg-gray-100 p-3">
      <Container>
        <h1 className="text-center text-3xl font-bold">
          Recently Added Products
        </h1>

        <div className="grid grid-cols-5 gap-2">
          {/* <ProductBox></ProductBox> */}

          {products.map((prod) => {
            return <ProductBox product={prod} key={prod.id} />;
          })}
        </div>
      </Container>
    </div>
  );
}

export default RecenlyAdded;
