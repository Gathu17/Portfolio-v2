import React,{useEffect} from 'react'
import './wave.css'
import {gsap} from 'gsap'

type Props = {
    arr?: string[]
}
const WaveLetters:React.FC<Props> = ({arr}) => {
  
 
  return (
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