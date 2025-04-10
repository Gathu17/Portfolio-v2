import React,{useEffect,useRef,useState} from 'react'
import './services.css'
import 'animate.css';
import Draw from '../../assets/blank_canvas.svg'
import Develop from '../../assets/programmer.svg'
import Design from '../../assets/draw.svg'
import Deploy from '../../assets/maker_launch.svg'
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'
import { motion } from "framer-motion";
import { useInView } from "framer-motion";


const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      image: Design,
      title: "Web Design",
      description: "I create visually stunning and user-friendly website designs that leave lasting impressions. Using modern design principles and tools like Figma, I craft responsive layouts that perfectly balance aesthetics with functionality. From wireframes to final UI/UX designs, I ensure your website not only looks great but also delivers an exceptional user experience."
    },
    {
      image: Develop,
      title: "Web development",
      description: "From dynamic landing pages to full-stack applications, I craft robust web solutions. I specialize in building feature-rich, scalable applications that combine stunning design with powerful functionality to deliver exceptional user experiences."
    },
    {
      image: Deploy,
      title: "Web deployment",
      description: "I ensure your applications are deployed securely and efficiently in the cloud using containerization best practices. My deployment pipeline includes robust CI/CD integration with Jenkins, comprehensive application monitoring, and performance optimization tools. This ensures your application runs smoothly in production while maintaining peak performance and reliability."
    },   
  ];
 
  return (
    <div className="services-container" id="services-container" ref={servicesRef}>
      <h3 className='text-2xl'>Services I offer</h3>
      {services.map((service, index) => (
        <motion.div
          key={service.title}
          className="service"
          initial={{ 
            opacity: 0, 
            x: index % 2 === 0 ? -100 : 100 
          }}
          whileInView={{ 
            opacity: 1, 
            x: 0 
          }}
          transition={{ 
            duration: 0.8,
            delay: index * 0.2,
            type: "spring",
            stiffness: 100
          }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <img src={service.image} alt={service.title} className='m-auto'/>
          <h3 className='text-xl'>{service.title}</h3>
          <hr style={{ width: "50%", opacity: "0.5", margin: "auto" }} />
          <p className='mt-3'>{service.description}</p>
        </motion.div>
      ))}
    </div>
  )
}

export default Services
