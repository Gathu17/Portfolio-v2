import React,{useEffect} from 'react'
import './projects.css'
import Amg from '../../assets/Aimg.png'
import Emg from '../../assets/Eimg.png'
import Smg from '../../assets/Simg.png'
import Dimg from '../../assets/doc-review.png'
import Cimg from '../../assets/coverly.png'
import Pimg from '../../assets/portfolio.png'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'
import {FaGithub,FaLink} from 'react-icons/fa'

const Projects = () => {
  function projectSlider() {
     gsap.registerPlugin(ScrollTrigger)
     gsap.to(".slide-container", {
      xPercent: -100, 
      // x: () => innerWidth,
      ease: "none",
      scrollTrigger: {
        trigger: ".projects-container",
        start: "top 30%",
        end: "+=80%",
        scrub: 2,
         pin: true,
        pinSpacing: true
        // invalidateOnRefresh: false,
        // anticipatePin: 1
      }
    });
  }
  useEffect(()=>{
    projectSlider()
  })
  return (
    <div className="projects-container" id="projects-container">
      <h2 style={{marginBottom:"5%"}}>Some of the projects that I've worked on</h2>
   
    <div className="slide-container">
               <div className="slide _1">
               
                <img src={Dimg}  alt='s'style={{width: '100%', height: '100%'}}  />
                <div className="info">
                   <h3>Review app</h3> 
                   <p>A review app where users can login and upload or update documents that can be reviewed and approved by committee/person <br/>
                     Login:(name: Jane, email: glitexuser2@gmail.com) </p>
                   <div style={{display:"flex",alignItems: "center"}}><span className="btn-link"><FaGithub color="black" size="1em"/><a href="https://github.com/DocReview">GITHUB</a></span><span style={{marginLeft: "2%"}}><a href="https://Coverly.app" target="_blank"><FaLink size="1.5em"/></a></span></div>
                </div>
               </div>
               <div className="slide _2">
               <img src={Emg} alt='s'style={{width: '100%', height: '100%'}}  />
                <div className="info">
                   <h3 >E-commerce app</h3> 
                   <p>An online store web app built with MERN stack where users can login, filter and add products to cart and checkout with stripe.. <br/>  Login:(name: Jerry, password: 123456)</p> 
                   <div style={{display:"flex",alignItems: "center"}}><span className="btn-link"><FaGithub color="black" size="1em"/><a href="https://github.com/E-commerce-client">GITHUB</a></span><span style={{marginLeft: "2%"}}><a href="https://Coverly.app" target="_blank"><FaLink size="1.5em"/></a></span></div>
                </div>
                
               </div>
               <div className="slide _3">
               <img src={Cimg}  alt='s'style={{width: '100%', height: '100%'}}  />
                <div className="info">
                   <h3>Coverly app</h3> 
                   <p>An app that generates coverletters from resumes using GPT-3. Contributed as a backend developer and lead DevOps engineer.</p>
                   <div style={{display:"flex",alignItems: "center"}}><span className="btn-link"><FaGithub color="black" size="1em"/><a href="#">GITHUB</a></span><span style={{marginLeft: "2%"}}><a href="https://Coverly.app" target="_blank"><FaLink size="1.5em"/></a></span></div>
                </div>
               </div>
               <div className="slide _4">
               <img src={Pimg}  alt='s'style={{width: '100%', height: '100%'}}  />
                <div className="info">
                   <h3>Portfolio</h3> 
                   <p>This is my previous portfolio built using React, GSAP and Sass</p>
                   <div style={{display:"flex",alignItems: "center"}}><span className="btn-link"><FaGithub color="black" size="1em"/><a href="https://github.com/my-portfolio">GITHUB</a></span><span style={{marginLeft: "2%"}}><a href="https://Coverly.app" target="_blank"><FaLink size="1.5em"/></a></span>
                </div></div>
                
               </div>
               <div className="slide _5">
                 <img src={Smg}  alt='s'style={{width: '100%', height: '100%'}}  />
                <div className="info">
                   <h3>Social app</h3> 
                   <p>A posting app built with Reactjs and GraphQl API that fetches data from MongoDB. The app was styled with semantic-ui.</p>
                   <div style={{display:"flex",alignItems: "center"}}><span className="btn-link"><FaGithub color="black" size="1em"/><a href="https://github.com/Social-server">GITHUB</a></span><span style={{marginLeft: "2%"}}><a href="https://Coverly.app" target="_blank"><FaLink size="1.5em"/></a></span></div>
                </div>
               </div>

               <div className="slide _6">
               
               <img src={Amg} alt='s'style={{width: '100%', height: '100%'}}  />   
                <div className="info">
                 <h3>API app</h3> 
                   <p>A guessing game app built with HTML, CSS, and JavaScript and fetches data from different APIs.</p>
                  <div style={{display:"flex",alignItems: "center"}}><span className="btn-link"><FaGithub color="black" size="1em"/><a href="https://github.com/">GITHUB</a></span><span style={{marginLeft: "2%"}}><a href="https://Coverly.app" target="_blank"><FaLink size="1.5em"/></a></span></div>
                   
                </div>
               </div>
           
      </div>
    
      
        
    </div>
  )
}

export default Projects