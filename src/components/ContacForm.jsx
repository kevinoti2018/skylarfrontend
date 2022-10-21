import React from 'react'
import '../styles/contactForm.css'
const ContacForm = () => {
  return (
    <div className='container'>
        <div className='top'>
        <p className='keep'> keep in touch</p>
        <h1 className='title'>Contact Us</h1>
        </div>
        <div className='c-container'>
            <div className='left'>
            <form>
            <label className='label' htmlFor='name'>Name</label>
                <input type='text' name='name' placeholder='Enter name'/>
            <label className='label' htmlFor='email'>Email</label>
                <input type='email' name='email' placeholder='Enter email'/>
            <label className='label' htmlFor='message'>Message</label>
                <textarea cols={40} rows={5} placeholder='Enter message'></textarea>
                <button className='message'>Send Message</button>
            </form>
            </div>
            <div className='right'>
                <div className='phone'>
                    <p>Phone</p>
                    <p>1234567890 </p>
                    <p>1234567890 </p>
                </div>

                <div className='email'>
                     <p>Email</p>
                    <p> info@skylarsystems.com</p>
                    <p> info@skylarsystems.com</p>
                </div>
                <div className='address'>
                    <p>Address</p>
                    <p> 14 eldama ravine rd, westlands</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContacForm