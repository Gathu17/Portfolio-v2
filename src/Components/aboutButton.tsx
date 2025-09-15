import React, { useEffect } from 'react'
import 'animate.css';

const AboutButton = () => {
    // const animateLetters = () => {
    //     const letters = document.querySelectorAll('#about-button');
    //     letters.forEach((letter, index) => {
    //         setTimeout(() => {
    //             letter.classList.add('animate__animated', 'animate__bounceInUp');
    //         }, index * 100);
    //     });
    // }
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         const letters = document.querySelectorAll('#about-button');
    //         const colors = [
    //             '#015871',  // Original color
    //             '#014d62',  // Darker shade
    //             '#013d4f',  // Even darker
    //             '#012e3c',  // Darkest shade
    //             '#01232e',  // Very dark shade
    //             '#011820',
    //             '#ffffff'   // Almost black shade
    //         ];
    //         let colorIndex = 0;
    //         letters.forEach((letter, index) => {
    //             setTimeout(() => {
    //                 // letter.classList.add('animate__animated', 'animate__bounceInUp');
    //                 letter.style.color = colors[colorIndex % colors.length]; // Cycle through colors
    //             }, index * 100);
    //             colorIndex = (colorIndex + 1) ;
    //         });
    //     }, 3000);
        
    //     return () => clearInterval(interval); // Cleanup interval on unmount
    //     // animateLetters();
    //   }, []);

  return (
    <div className="flex items-center justify-center mr-5">
          <span  className="text-4xl" id='about-button'>A</span>
          <span  className="text-4xl" id='about-button'>b</span>
          <span  className="text-4xl" id='about-button'>o</span>
          <span  className="text-4xl" id='about-button'>u</span>
          <span  className="text-4xl" id='about-button'>t</span>
          <span   className="text-4xl" id='about-button'style={{margin:"5%"}}>  </span>
          <span   className="text-4xl" id='about-button'>m</span>
          <span   className="text-4xl" id='about-button'>e</span>
    </div>
  )
}

export default AboutButton