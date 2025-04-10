import * as React from 'react';
import { Component } from 'react';
import './menu.css'
import {FaLinkedin,FaGithub,FaTwitter} from 'react-icons/fa'

interface Props {
  open: boolean;
}
const Menu: React.FC<Props> = ({open})=> {
  return (
    <div className="menu" style={{ transform: `${open ? 'scale(5)' : 'scale(0)'}`}}>
      <ul className="list">
        <li className='list-items'>
         <a href="#home-container">Home</a>
        </li>
        <li className='list-items'>
         <a href="#about-container">About me</a>
        </li >
        <li className='list-items'>
         <a href="#services-container">Services</a>
        </li>
        <li className='list-items'>
         <a href="#projects-container">Projects</a>
        </li>
        <li className='list-items'>
         <a href="#contact-container">Contact</a>
        </li>
        <li className='list-items'>
         <a href="https://jerryg.hashnode.dev" target="_blank">My blogs</a>
        </li>
      </ul>
      <span className="oval"></span>
      <ul className="menu-icons">
         <li><a href="https://github.com/Gathu17"><FaGithub/></a></li>
         <li><a href="https://www.linkedin.com/in/jerry-gathu-7b527a1b2/"><FaLinkedin/></a></li>
         <li><a href="https://twitter.com/jerry_script"><FaTwitter/></a></li>
      </ul>
    </div>
  )
}

export default Menu