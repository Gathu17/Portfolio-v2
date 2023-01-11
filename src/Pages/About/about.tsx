import React, { useEffect, PointerEvent,useState } from 'react'
import {FaReact,FaNodeJs,FaSass,FaDocker} from 'react-icons/fa'
import {SiTypescript,SiMongodb,SiApollographql,SiAzuredevops,SiExpress} from 'react-icons/si'
import { FcLinux } from "react-icons/fc";
import { motion, useMotionValue, useTransform } from "framer-motion";
import './about.css'


const style = {}
const items = [<FaReact color="blue" size="2.5em" style={{margin:"auto"}}/>,<FaNodeJs color="blue" size="2.5em" style={{margin:"auto"}}/>,<FaSass color="blue" size="2.5em" style={{margin:"auto"}}/>, <FaDocker color="blue" size="2.5em" style={{margin:"auto"}}/>, 
<SiTypescript color="blue" size="2.5em" style={{margin:"auto"}}/>,<SiMongodb color="blue" size="2.5em" style={{margin:"auto"}}/>, <SiApollographql color="blue" size="2.5em" style={{margin:"auto"}}/>,<SiAzuredevops color="blue" size="2.5em" style={{margin:"auto"}}/>];
const names = ["React","Nodejs","Sass","Docker","Typescript","MongoDB","GraphQl","DevOps"]
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
        console.log(isVisible)
        if (entry.isIntersecting) {
          setIsVisible(true);
          console.log('about')
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
            I build visually-appealing, authentic and expeditious web apps for 
        all your business needs. I also possess a background in electronics that allows
        me to proficiently engineer IoT software solutions.
        </p>
        <div className="about-skills">
          <h2 style={{color:"white"}}>Some of the tools I use </h2>
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
                    width: 600,
                    height: 150,
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
                        height: 150,
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
                                    height: 150,
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