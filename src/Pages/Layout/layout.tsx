import React,{useState,useRef} from 'react'
import Home from '../Home/home'
import About from '../About/about'
import Services from '../Services/services'
import Projects from '../Projects/projects'
import Contact from '../Contact/contact'
import Footer from '../../Components/Footer/footer'
import {gsap} from 'gsap'
import {ScrollToPlugin} from 'gsap/dist/ScrollToPlugin'



const Layout: React.FC = () => {
  const slideRef = useRef<null>(null)

  function handleSlide (event: React.MouseEvent<Element>){
    const pageRed =  document.querySelector(".page_red")
    const pageBlue =  document.querySelector(".page_blue")
    const pageBlack =  document.querySelector(".page_black")
    gsap.registerPlugin(ScrollToPlugin)
    let tl = gsap.timeline({defaults: {duration: 1}})
    tl.to(pageRed,{
       scaleX: 1,
       transformOrigin: 'top',
       ease: "power2.inOut",
       
    })
    tl.to(pageBlue,{
      scaleX: 1,
      transformOrigin: 'top',
      ease: "power2.inOut",
      
   },0.5)
   tl.to(pageBlack,{
    scaleX: 1,
    transformOrigin: 'top',
    ease: "power2.inOut",
    
 },1)
   tl.to(window,{
    duration: 1, scrollTo: {y: "#about-container"},
    onStart: () => { document.documentElement.style.scrollBehavior = "auto"; },
    onComplete: () => { document.documentElement.style.scrollBehavior = "smooth"; }
   })
    tl.set(pageRed,{
      scaleX: 0
    })
    tl.set(pageBlue,{
      scaleX: 0
    })
    tl.set(pageBlack,{
      scaleX: 0
    })
    
  
  }

  return (
    <div >
      <Home  handleSlide={handleSlide}/>
      <About/>
      <Services/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Layout