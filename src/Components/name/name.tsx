import React from 'react'
import './name.css'

const Name = () => {
  return (
    <div className='name-container'>
        <svg viewBox="0 0 100 20">
  <defs>
    <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
      <stop offset="5%" stopColor="#4fd1c5"/>
      <stop offset="95%" stopColor="#38b2ac"/>
    </linearGradient>
    <pattern id="wave" x="0" y="0" width="120" height="20" patternUnits="userSpaceOnUse">
      <path id="wavePath" d="M-40 9 Q-30 7 -20 9 T0 9 T20 9 T40 9 T60 9 T80 9 T100 9 T120 9 V20 H-40z" mask="url(#mask)" fill="url(#gradient)"> 
        <animateTransform
            attributeName="transform"
            begin="0s"
            dur="3s"
            type="translate"
            from="40,0"
            to="0,0"
            repeatCount="indefinite" />
      </path>
    </pattern>
  </defs>
  <text textAnchor="middle" x="50" y="15" fontSize="17" fill="url(#wave)"  fillOpacity="1">Jerry Gathu</text>
  <text textAnchor="middle" x="50" y="15" fontSize="17" fill="url(#gradient)" fillOpacity="0.5">Jerry Gathu</text>
</svg>

    </div>
  )
}

export default Name