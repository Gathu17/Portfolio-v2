import React, { useEffect, PointerEvent,useState } from 'react'
import {FaReact,FaNodeJs,FaSass,FaDocker, FaPhp,FaVuejs,FaAws, FaFigma} from 'react-icons/fa'
import {SiTypescript,SiMongodb,SiApollographql,SiAzuredevops,SiExpress,SiMysql} from 'react-icons/si'
import { FcLinux } from "react-icons/fc";
import { motion, useMotionValue, useTransform } from "framer-motion";
import './about.css'


const style = {}
const items = [<FaReact color="blue" size="2.5em" style={{margin:"auto"}}/>,<FaVuejs color="blue" size="2.5em" style={{margin:"auto"}}/>,<FaNodeJs color="blue" size="2.5em" style={{margin:"auto"}}/>,<FaPhp color="blue" size="2.5em" style={{margin:"auto"}}/>,<FaSass color="blue" size="2.5em" style={{margin:"auto"}}/>, <FaDocker color="blue" size="2.5em" style={{margin:"auto"}}/>, 
<SiTypescript color="blue" size="2.5em" style={{margin:"auto"}}/>,<SiMysql color="blue" size="2.5em" style={{margin:"auto"}}/>,<SiMongodb color="blue" size="2.5em" style={{margin:"auto"}}/>, <SiApollographql color="blue" size="2.5em" style={{margin:"auto"}}/>,<FaAws color="blue" size="2.5em" style={{margin:"auto"}}/>,<FaFigma color="blue" size="2.5em" style={{margin:"auto"}}/>];
const names = ["React","Vuejs","Nodejs","PHP","Sass","Docker","Typescript","MySQL","MongoDB","GraphQl","AWS","Figma"]
const width = 80;
const padding = 10;
const size = 150;

const About : React.FC = () => {
  const scrollX = useMotionValue(0);
    const scale = useTransform(scrollX, [0, 100], [0, 1]);
    const opacity = useTransform(scrollX, [0, 100], [0, 1]);

  function getWidth(items: JSX.Element[]) {
    const totalWidth = items.length * width;
    const totalPadding = (items.length - 1) * padding;
    const totalScroll = totalWidth + totalPadding;
    return totalScroll;
}
const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      });
    });

    observer.observe(document.querySelector('#about-container') as HTMLDivElement);

    return () => {
      observer.disconnect();
    };
  }, []);  
  
  return (
    <div className="about-container" id="about-container" style={{opacity: isVisible ? 1 : 0,transform: isVisible ? "translateY(0px)": "translateY(-5%)",transition: 'all 0.5s ease-in',}}>
        <p className="about-text">
        Meet a digital architect who transforms business challenges into elegant web solutions. With over two years of hands-on development experience, I'm not just a coder – I'm a creative problem-solver who thrives on crafting innovative web solutions across different industries.
        I specialize in building custom digital experiences that don't just work – they propel businesses forward, combining clean code with creative thinking to turn your vision into reality.
        </p>
        <div className="about-skills">
          <h2 className='text-2xl mb-3'>Some of the tools I use </h2>
         <div className="icon-skills" >
           <motion.div
                style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    backgroundColor: "#fff",
                    position: "absolute",
                    top: "50%",
                    marginTop: 15,
                    left: "20%",
                    margin: "auto",
                    // zIndex: 20,
                    scale: scale,
                    opacity: opacity
                }}
            />
            <motion.div
                style={{
                    width: window.innerWidth <= 500 ? 200 : 600,
                    height: window.innerWidth <= 500 ? 120 : 150,
                    borderRadius: 30,
                    overflow: "hidden",
                    // marginLeft: 200,
                    margin: "auto",
                    position: "relative",
                    transform: "translateZ(0)",
                    cursor: "grab"
                }}
                whileTap={{ cursor: "grabbing" }}
            >
                <motion.div
                    style={{
                        height: window.innerWidth <= 500 ? 120 : 150,
                        width: getWidth(items),
                        x: scrollX
                    }}
                    drag="x"
                    dragConstraints={{
                        left: -getWidth(items) + size,
                        right: 0
                    }}
                >
                    {items.map((item, index) => {
                        return (
                            <motion.div
                                style={{
                                    width: width,
                                    height: window.innerWidth <= 500 ? 120 : 150,
                                    borderRadius: 20,
                                    backgroundColor: "#fff",
                                    display: "flex",
                                    alignItems: "center",
                                    flexDirection: "column",
                                    boxShadow: "1px 1px 2px 2px #808080",
                                    float:"left",
                                    zIndex: "1",
                                    marginRight:
                                        index !== items.length - 1 ? 10 : 0
                                }}
                                key={index}
                            >{item} <span style={{marginBottom: "30%",color:"black"}}>{names[index]}</span></motion.div>
                        );
                    })}
                    
                </motion.div>
            </motion.div>
          </div> 
          
        </div>
       
    </div>
  )
}

export default About