import React, { useEffect, useState } from 'react'
import Hero from '../../components/Hero'
import Footer from '../../components/Footer'
import Feature from '../../components/Feature'
import ProductsCard from '../../components/ProductsCard'

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    const fetchProducts = async () =>{
      const response = await fetch('https://fakestoreapi.com/products?limit=10')
      const data = await response.json()
      console.log(data);
      setProducts(data);
    }
    fetchProducts()
  },[])
  
  return (
    <>
        <Hero/>
        <h2 className='text-4xl font-bold text-center'>Products</h2>
        {
          products.length>0 ?
          <ProductsCard products={products} />
          :
          <div>Loading...</div>
        }
        <ProductsCard/>
        <h2 className='text-4xl font-bold text-center'>Popular Feature</h2>
        <Feature/>
        <Footer/>
    </>
  )
}
export default Home