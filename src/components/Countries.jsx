import React from 'react'
import { flagData } from '../data/data'
import "../styles/home.css"
const Countries = () => {
  return (
    <div className='countries-container'>
        <div className='countries-head'>
            <h2> Countries we have worked with</h2>
        </div>
        <div className='countries-body'>
            {flagData.map((item)=>(
                <ul key={item.key}>
                    <li className='image-container'>
                        <img src={item.image} alt={item.alt}/>
                    </li>
                </ul>
            ))}
        </div>
    </div>
  )
}

export default Countries