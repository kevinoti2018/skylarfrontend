import React from 'react'
import Footer from '../components/Footer'
import Idea from '../components/Idea'
import Navigation from '../components/Navigation'
import ProjectCard from '../components/ProjectCard'
import '../styles/projectCard.css'

const Projects = () => {
  return (
    <div className='proj-container'>
    <Navigation/>
    <div className='project-top'>
    <p className='keep'> Explore Some Of Our Projects</p>
    <h1 className='title'>Projects</h1>
    <h2 className='text'>Projects we have <span className='blue'>worked</span> on and <span className='blue'>delivered</span></h2>
  </div>
      
      <ProjectCard/>
      <Idea/>
      <Footer/>
    </div>
  )
}

export default Projects