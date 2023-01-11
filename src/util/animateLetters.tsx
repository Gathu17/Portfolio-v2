import React from 'react'
import 'animate.css';

type Props = {
  str: string[],
  index: number
}
const Animate: React.FC<Props> = ({str,index}) => {
  return (
    <div> {
        str.map((char,i)=>{
            return (
                <span key={char+i} className={`animate__animated  animate__bounceInUp animate__delay-${i + index/10}s`}>
                {char}
                </span>
            )
        })
        } 
    </div>
  )
}

export default Animate