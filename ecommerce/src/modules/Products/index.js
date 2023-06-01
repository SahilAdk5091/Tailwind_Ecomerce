import React, { useEffect, useState } from 'react'
import ProductsCard from '../../components/ProductsCard'
import Footer from '../../components/Footer';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
    const fetchProducts = async () =>{
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      console.log(data);
      setProducts(data);
    }
    fetchProducts()
  },[])
  return (
    <>
    <h1 className='text-6xl text-center mt-10 font-semibold'>Products</h1>
    <ProductsCard products={products}/>
    <Footer/>
    </>
  )
}


export default Products