import * as React from 'react';
import { Component } from 'react';
import './menu.css'
import {FaLinkedin,FaGithub,FaTwitter} from 'react-icons/fa'

interface Props {
  open: boolean;
}
const Menu: React.FC<Props> = ({open})=> {
  console.log(open)
  return (
    <div className="menu" style={{ transform: `${open ? 'scale(5)' : 'scale(0)'}`}}>
      <ul className="list">
        <li className='list-items'>
         <a href="#">Home</a>
        </li>
        <li className='list-items'>
         <a href="#">About me</a>
        </li >
        <li className='list-items'>
         <a href="#">Services</a>
        </li>
        <li className='list-items'>
         <a href="#">Projects</a>
        </li>
        <li className='list-items'>
         <a href="#">Contact</a>
        </li>
        <li className='list-items'>
         <a href="#">My blogs</a>
        </li>
      </ul>
      <span className="oval"></span>
      <ul className="menu-icons">
         <li><FaGithub/></li>
         <li><FaLinkedin/></li>
         <li><FaTwitter/></li>
      </ul>
    </div>
  )
}

export default Menu