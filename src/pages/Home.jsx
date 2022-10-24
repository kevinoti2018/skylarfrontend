import React from 'react'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import Idea from '../components/Idea';
import '../styles/home.css'
import Services from './../components/Services';
import About from './../components/About';
const Home = () => {
  return (
    <div className='h-container'>
      <Navigation/>
      <Services/>
      <About/>
      <Idea/>
      <Footer/>
    </div>
  )
}

export default Home