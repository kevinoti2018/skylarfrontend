import React from 'react'
import Footer from '../components/Footer';
import Idea from '../components/Idea';
import Navigation from '../components/Navigation';
import ContacForm from './../components/ContacForm';
import '../styles/contactForm.css'
const Contact = () => {
  return (
    <div className='contact-container'>
    <Navigation/>
    <ContacForm/>
    <Idea/>
    <Footer/>
    </div>
  )
}

export default Contact