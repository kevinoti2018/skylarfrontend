import React from 'react'
import { testimonialData } from './../data/data';
import { AiFillStar } from "react-icons/ai";
const Testimonials = () => {
  return (
    <div className='testimonials-container'>
      <div className='testimonial-header'>
        <h2> Testimonials</h2>
        <p>what our cients say about us</p>
      </div>
      <div className='testimonial-body'>
        {testimonialData.map((item)=>(
          <ul key={item.key}>
            <li className='testimonial-card'>
              <div className='testimonial-top'>
                <div className='testimonial-left'>
                  <img src={item.image} alt= 'person '/>
                </div>
                <div className='testimonial-right'>
                  <h3 className='t-name'>{item.name}</h3>
                  <p className='t-country'>{item.country}</p>
                  <i>
                  < AiFillStar/> < AiFillStar/>
                  < AiFillStar/> < AiFillStar/>
                  < AiFillStar/> 
                  </i>
                 
                </div>
              </div>
              <div className='testimonial-bottom'>
               <p className='t-content'>  {item.content} </p>
              </div>
            </li>
          </ul>
        ))}
      </div>
    </div>
  )
}

export default Testimonials