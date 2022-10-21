import React from 'react'
import '../styles/footer.css'
const Footer = () => {
  return (
    <div className='f-container'>
        <ul className='f-list'>
            <li><a href='/'>Home</a> <span className='f-line'>|</span></li>
            <li><a href='/products'>Products</a> <span className='f-line'>|</span></li>
            <li><a href='/projects'>Projects</a> <span className='f-line'>|</span></li>
            <li><a href='/contact'>Contact</a> <span className='f-line'>|</span></li>
        </ul>
        <div className='icons'>
            <div className='icon'>
                <img src='./images/socials/fb.png' alt='facebook'/>
            </div>
            <div className='icon'>
                <img src='./images/socials/twitter.png' alt='twitter'/>
            </div>
            <div className='icon'>
                <img src='./images/socials/youtube.png' alt='youtube'/>
            </div>
            <div className='icon'>
                <img src='./images/socials/ig.png' alt='instagram'/>
            </div>
        </div>
        <div className='f-content'>
        <p>&#169; 2022 Skylar Systems, All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer