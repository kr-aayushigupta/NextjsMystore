const getCategories=async()=>{
    const response=await fetch("https://fakestoreapi.in/api/products/category")

    const data=await response.json()
    return data.categories;
}

const getProducts=async(product_id=null)=>{
    let API='https://fakestoreapi.in/api/products';
    if(product_id!=null){
        API+="/"+product_id;
    }
    const response=await fetch("https://fakestoreapi.in/api/products")

    const data=await response.json()
    return data.products;
}

export {getCategories,getProducts};