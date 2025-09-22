import React from 'react'
import './intro.css'
import { Link } from 'react-scroll'
import bg from '../../assets/bg.jpg'
import btnImg from '../../assets/hireme.png'
const Intro = () => {
  return (
      <section id='intro'>
        <div className="introContent">
          <span className='hello'>Hello,</span>
          <span className='IntroText'>I'm <span className='IntroName'>Dinesh</span><br/>Java Full Stack Developer</span>
          <p className='para'>A passionate Java Full Stack Developer dedicated to building scalable solutions.
                               Transforming ideas into seamless and impactful web experiences..</p>
               <Link to="contact" smooth={true} duration={500}><button className='btn' ><img src={btnImg} alt='btnImg' className='btnImg'/>Hire me</button></Link>
        </div>
      <img src={bg} alt='profile' className='bg'/>
      </section>
  )
}

export default Intro
