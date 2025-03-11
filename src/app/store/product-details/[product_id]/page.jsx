import React from 'react'

export default async function ProductDetails({params}) {

    const data=await getProducts(params.product)
    return (
        <div>



        </div>
  )
}
