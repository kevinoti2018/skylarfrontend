import React from 'react'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import Idea from '../components/Idea';
import '../styles/home.css'
import Services from './../components/Services';
import About from './../components/About';
import Countries from '../components/Countries';
import Testimonials from '../components/Testimonials';
const Home = () => {
  return (
    <div className='h-container'>
      <Navigation/>
      <Services/>
      <About/>
      <Countries/>
      <Testimonials/>
      <Idea/>
      <Footer/>
    </div>
  )
}

export default Home