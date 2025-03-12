import React from 'react'
import RecenlyAdded from '@/components/home/RecenlyAdded'

import styles from '@/styles/product-details/productdetail.module.css';
import Container from '@/components/Container';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import { getProducts } from '@/library';
// const products=[
//   {
//     id:1,
//     title:"Sony WH-1000XM3 Bluetooth wireless Headphones",
//     image:"https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692947383286-714WUJlhbLS._SL1500_.jpg",
//     brand:"Sony",
//     model:"WH-1000XM3",
//     color:"silver",
//     category:"Audio",
//     discount:11,

//   }
// ]
export default async function ProductDetails({params}) {

    // const product=products.find((product)=> product.id ===parseInt(1));  
    
    // if(!product) return <p>Product not found</p>;
    const product=await getProducts(params.product_id);

    return (
      <Container className="col-span-4">
          <div className='py-12 px-4'>
            <div className='flex flex-col md:flex-row items-start bg-white'>

              <img
                src={product.image}
                alt={product.title}
                className={`${styles.productImage} w-full md:w-1/2 object-cover`}  
              >
              </img>

{/* Product details */}
              <div className='p-6 md:w-1/2'>
                <h1 className='text-xl font-semibold text-gray-800 mb-4'>{product.title}</h1>

                <p className='text-md text-gray-600 mb-4'>{product.description}</p>

                <p className='text-gray-900 mb-4 text-md font-semibold'>Price: ${product.price}</p>

                {product.discount && (<p className='text-green-600 mb-4 text-md font-semibold'>Discount: {product.discount} % off</p>)}

                <ul className='text-gray-700 space-y-2 text-md'>
                  <li><strong>Brand:</strong>{product.brand}</li>
                  <li><strong>Model:</strong>{product.model}</li>
                  <li><strong>Color:</strong>{product.color}</li>
                  <li><strong>Category:</strong>{product.category}</li>
                
                </ul>

                <button className='mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-md'>

                  Add to Cart
                </button>
              </div>

            </div>
          </div>

          {/* {
            new Date().getTime()%2==0
            ?<RecenlyAdded></RecenlyAdded>
            :<FeaturedProducts bgColor={'bg-white'}></FeaturedProducts>
          } */}
      </Container>
        
  )
}
