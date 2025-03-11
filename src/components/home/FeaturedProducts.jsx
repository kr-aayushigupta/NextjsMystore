import React from 'react'

import Container from '../Container'
import ProductBox from '../ProductBox';
async function FeaturedProducts() {

  const response=await fetch("https://fakestoreapi.in/api/products?limit=5")

  const data=await response.json();


  return (
    <div className="p-3">
      <Container>
        <h1 className="text-center text-3xl font-bold">
          Featured Products
        </h1>

        <div className="grid grid-cols-5 gap-2">
          {/* <ProductBox></ProductBox> */}

          {data.products.map((prod) => {
            return <ProductBox product={prod} key={prod.id} />;
          })}
        </div>


      </Container>
    </div>
  )
}

export default FeaturedProducts