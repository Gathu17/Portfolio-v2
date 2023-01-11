import React,{useState} from 'react'
import Menu  from './menu/menu'

const Navbar = () => {
 const [toggleMenu,setToggleMenu] = useState(false)
    function handleClick(){
     const ham =  document.querySelector(".ham") as HTMLElement
     ham.classList.toggle('active') 
     setToggleMenu(!toggleMenu)
    }
  return (
    <nav  className="navbar-container">
        <div className="navbar-logo">JerryG.</div>
        <div>
        <svg className="ham hamRotate ham4" viewBox="0 0 100 100" width="80" onClick={handleClick}>
  <path
        className="line top"
        d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20" />
  <path
        className="line middle"
        d="m 70,50 h -40" />
  <path
        className="line bottom"
        d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20" />
</svg>
        </div>
        <Menu open={toggleMenu}/>
    </nav>
  )
}

export default Navbar