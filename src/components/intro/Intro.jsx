import React from 'react'
import { Link } from 'react-scroll'
import './Intro.css';
import bg from "../../assets/jitu.jpeg"
import btnImg from "../../assets/hireme.png"


const Intro = () => {
  return (
   <section id='intro'>
    <div className='introContent'>
        <span className="hello">Hello</span>
        <span className="introText">I'm <span className='introName'>MwangauMuruga</span><br/> I hold a BSc in Information Technology  </span>
  <p className='introPara'> 
  
  <ul className='skills'><thead>I specialize in;</thead>
      <li>Web Application Development</li>
      <li>Network Configuration & Security</li>
      <li>System Adminstration </li>
    </ul>
  
    </p>
   <Link><button className='btn'><img src={btnImg} alt='hire me'className='btnImg'/> Hire Me</button></Link>
    </div>
    <img src={bg} alt="Profile" className="bg"></img>
    </section>
  )}
export default Intro
