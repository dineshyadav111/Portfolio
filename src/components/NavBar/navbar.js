import React,{useState} from 'react'
import './navbar.css'
import { Link } from 'react-scroll'
import contactImg from '../../assets/contact.png'
import menuImg from '../../assets/menu.png'
const Navbar = () => {
 const [show,setShow] = useState(false);
  return (
    <nav className="navbar">
        
       <div className="desktopMenu">
    <Link to="intro" smooth={true} duration={500} className="MenuItems">Home</Link>
    <Link to="skills" smooth={true} duration={500} className="MenuItems">About</Link>
    <Link to="projects" smooth={true} duration={500} className="MenuItems">Projects</Link>
    <Link to="Resume" smooth={true} duration={500} className="MenuItems">Resume</Link>
       </div>
      <Link to="contact" smooth={true} duration={500}>
        <button className="desktopMenuBtn">
             <img className='desktopMenuImg' src={contactImg} alt='contactImg'/> Contact me </button>
      </Link>

      <img src={menuImg} alt='menu' className='mobMenu' onClick={()=>setShow(!show)} />
      <div className="navMenu" style={show ? {display:'flex'} : {display:'none'}}> 
    <Link to="intro" smooth={true} duration={500} className="listItems" onClick={()=>setShow(false)}>Home</Link>
    <Link to="skills" smooth={true} duration={500} className="listItems" onClick={()=>setShow(false)}>About</Link>
    <Link to="projects" smooth={true} duration={500} className="listItems" onClick={()=>setShow(false)}>Projects</Link>
    <Link to="Resume" smooth={true} duration={500} className="listItems" onClick={()=>setShow(false)}>Resume</Link>
    <Link to="contact" smooth={true} duration={500} className="listItems" onClick={()=>setShow(false)}>Contact</Link>
       </div>
     </nav>
  )
}

export default Navbar


