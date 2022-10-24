import React from 'react'
import Footer from '../components/Footer'
import Idea from '../components/Idea'
import Navigation from '../components/Navigation'
import ProductCard from '../components/ProductCard'
import '../styles/productCard.css'
const Products = () => {
  return (
    <div className='container'>

       <Navigation/>
       <div className='product-top'>
       <p className='keep'> Explore some of our projects</p>
       <h1 className='title'>Products</h1>
     </div>
       <div className='prod-container'>
      <ProductCard/>
      </div>
      <Idea/>
      <Footer/>
    </div>
  )
}

export default Products