import React, { useEffect } from 'react'
import './home.css'
import {Link} from 'react-router-dom'
import BackGround from '../../Components/background/background2'
import 'animate.css';
import {gsap} from 'gsap'
import {useRef} from 'react'
import Name from '../../Components/name/name'
import About from '../../util/waveLetter/waveLetters'
import Animate from '../../util/animateLetters'


type Props = {
  handleSlide: (event: React.MouseEvent<Element>) => void
  ref?: React.MutableRefObject<null>
}

const Home : React.FC<Props> = ({handleSlide}):JSX.Element => {
  const waveRef = useRef<HTMLInputElement>(null)
  

  function disableScroll() {

    // Get the current page scroll position
   let scrollTop =
     document.documentElement.scrollTop;
   let scrollLeft =
     document.documentElement.scrollLeft
  
      
        window.addEventListener("scroll",()=>{
          console.log(scrollLeft, scrollTop);
        })
}

  return (
    <div className="home-container" id="home-container">
      <BackGround/>
        <div className="text-container">
          <p >Hi there!</p>  
      <div className="name" style={{display: "flex",alignItems:"center",justifyContent: "space-between"}}> 
        <p > I'm </p>
            <Name/>
       </div>
        <p>a full-stack Javascript Developer.</p>
       </div> 
       
       <div onClick={handleSlide} >
        <About />
        </div>
        
        
       <div className="slider"></div>
       <div className="page_red"></div>
       <div className="page_blue"></div>
       <div className="page_black"></div>
    </div>
  )
}

export default Home