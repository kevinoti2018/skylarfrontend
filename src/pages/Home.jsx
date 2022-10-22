import React from 'react'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import Idea from '../components/Idea';
import '../styles/home.css'
const Home = () => {
  return (
    <div className='h-container'>
      <Navigation/>
      <Idea/>
      <Footer/>
    </div>
  )
}

export default Home