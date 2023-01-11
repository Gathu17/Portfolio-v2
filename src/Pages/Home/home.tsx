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


type slideProps = {
  handleSlide?: (event: React.MouseEvent<Element, MouseEvent>) => void
  ref?: React.MutableRefObject<null>
}

const Home = ({handleSlide}:slideProps):JSX.Element => {
  const waveRef = useRef<HTMLInputElement>(null)
  

  function wave(){
    var tl = gsap.timeline();
    tl.fromTo(waveRef.current,{
    
    scale: 0.2,
    },{
     opacity: 1,
     scale: 1,
     ease: "elastic.inOut",
     duration: 2,
     transformOrigin: "50% 50%",
     onComplete: () => waveRef.current?.classList.add('wave')
  })

}
// function handleSlide(){
//   let tl = gsap.timeline({defaults: {duration: 1.5}})
//   tl.to('.home-container',{
//      y:"-100%"
//   })
// }
// useEffect(()=>{
//   setTimeout(()=>{
//     wave()
//   },3000)
// })
  return (
    <div className="home-container">
      <BackGround/>
        <div className="text-container">
          <p >Hi there!</p>  
      <div className="name" style={{display: "flex",alignItems:"center",justifyContent: "space-between"}}> 
        <p > I'm </p>
            <Name/>
       </div>
        <p>a Full-stack Javascript Developer.</p>
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