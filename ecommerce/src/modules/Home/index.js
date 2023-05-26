import React from 'react'
import Hero from '../../components/Hero'
import Products from '../../components/Products'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <>
        <Hero/>
        <h2 className='text-4xl font-bold text-center'>Products</h2>
        <Products/>
        <Footer/>
    </>
  )
}

export default Home