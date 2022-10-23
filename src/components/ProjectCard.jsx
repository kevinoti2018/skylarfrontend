import React from 'react'
import { ProjecData } from '../data/data'
import '../styles/projectCard.css'
const ProjectCard = () => {
  return (
    <div className='project-container'>
      {ProjecData.map((item)=>(
        <ul className='card-container'>
          <li> 
          <div className='top-cont'>
          <div className='image'>
            <img src={item.image} alt='images'/>
          </div>
          </div>
          <div className='bottom'>
          <h3>{item.name}</h3>
          <p>{item.content}</p>
          <button className='btn'> Read More</button>
          </div>
          
          </li>
          
        </ul>
      ))}
   
    </div>
  )
}

export default ProjectCard