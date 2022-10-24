import {React,useState} from 'react'
import '../styles/home.css'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
const About = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
   
    <div className='about-container'>
      <div className='about-top'>
        <h3 className='about-title'>About US</h3>
        <p> we are more than a digital agency</p>
      </div>
      <div className='about-mid'>
        <div className='about-right'>
          <p className='about-content'>
          At Skylar, we
          focus on developing business process automation applications with business intelligence tools
           that serve to improve business efficiency and revenues. Attached to these systems are the
          payments applications that we also build into the applications or support through our 3rd party
          business support payment platform.
          
          </p>
        </div>
        <div className='about-left'>
        <img src='../../images/home/about.png' alt=''/>
        </div>
      </div>
      <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit ={()=>setCounterOn(false)} >
      <div className='about-bottom'>
        <div className='about-bottom-right'>
          <div className='number'>
          <h2>
          {counterOn &&<CountUp start={0} end={10} duration={2} delay={0}/>}
          </h2>
          </div>
          <div className='words'>
            <h4>Partners</h4>
          </div>
        </div>
        <div className='about-bottom-mid'>
          <div className='number'>
          <h2>
          {counterOn &&<CountUp start={0} end={200} duration={2} delay={0}/>}
          +</h2>
          </div>
          <div className='words'>
            <h4>clients</h4>
          </div>
        </div>
        <div className='about-bottom-left'>
          <div className='number'>
          <h2>
          {counterOn &&<CountUp start={0} end={300} duration={2} delay={0}/>}
          +</h2>
          </div>
          <div className='words'>
          <h4>Projects</h4>
          </div>
        </div>
      </div>
      </ScrollTrigger>
    </div>
    
  )
}

export default About