import React from 'react'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import Idea from '../components/Idea';
import '../styles/home.css'
import Services from './../components/Services';
const Home = () => {
  return (
    <div className='h-container'>
      <Navigation/>
      <Services/>
      <Idea/>
      <Footer/>
    </div>
  )
}

export default Home