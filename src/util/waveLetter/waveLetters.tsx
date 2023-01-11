import React,{useEffect} from 'react'
import './wave.css'
import {gsap} from 'gsap'

type Props = {
    arr?: string[]
}
const WaveLetters:React.FC<Props> = ({arr}) => {
  // useEffect(()=>{
    // var tl=  gsap.timeline({repeat:3,repeatDelay:1});

// tl.staggerTo(".char",0.3,{y:-30,ease:Power2.easeInOut,repeat:1,yoyo:true},0.05);
// gsap.to(".letters", {
//   y: 100,
//   stagger: { // wrap advanced options in an object
//     each: 2,
//     from: "end",
//     grid: "auto",
//     ease: "power2.inOut",
//     repeat: -1 // Repeats immediately, not waiting for the other staggered animations to finish
//   }
// });
//   })
 
  return (
    // <p style={{display: "flex"}}>
    //   { arr.map((char,i) => {
    //     const Styles = {
    //         // animationDelay: `${(i+1)/10}`,
    //         animation: `rise 2.25s infinite ease-in-out ${(i+1)/10}`,

    //        zIndex: "1"
    //     }
    //     return(
    //         <span key={char + i}   className="letters">{char}</span>
    //     )
    //    })
    // }
    // </p>
    <div className="letters">
          <span>A</span>
          <span>b</span>
          <span>o</span>
          <span>u</span>
          <span>t</span>
          <span style={{margin:"5%"}}>  </span>
          <span>m</span>
          <span>e</span>
          
        </div>
  )
}

export default WaveLetters