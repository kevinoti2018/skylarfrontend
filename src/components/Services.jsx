import React from 'react'
import { ServiceData } from '../data/data'
import '../styles/home.css'

const Services = () => {
  return (
    <div >
        <div className='service-top'>
             <h2 className='service-title'> Services</h2>
             <p> our services for clients</p>
        </div>
        <div className='services-container'>
        {ServiceData.map((item)=>(
           
            <ul >
                <li key={item.key} className='services-card'>
                <div className='card-left'>
                    <div className ='icon-container'>
                        <p className='card-icon'>{item.icon}</p>
                    </div>
                </div>
                <div className='card-right'>
                 <h3>{item.name}</h3> 
                 <p>{item.content}</p>
                </div>
                  
                </li>
            </ul>

        ))}
        </div>
    </div>
  )
}

export default Services