import React from 'react'
import "../styles/navigation.css"
const Navigation = () => {
  return (
    <div className='n-container'>
        <div className='logo'>
           <a href='/'> <img src='./images/Logo/logo.png' alt='logo'/></a>
        </div>
        <div className='lnks'>
            <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='/projects'>Projects</a></li>
                <li><a href='/products'>Products</a></li>
                <li><a href='/contacts'>Contacts</a></li>
            </ul>
        </div>
    
    </div>
  )
}

export default Navigation