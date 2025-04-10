import React,{useEffect,useRef,useState} from 'react'
import './services.css'
import 'animate.css';
import Design from '../../assets/blank_canvas.svg'
import Develop from '../../assets/programmer.svg'
import Devices from '../../assets/AI.svg'
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
      image: Develop,
      title: "Web development",
      description: "From dynamic landing pages to full-stack applications, I craft robust web solutions. I specialize in building feature-rich, scalable applications that combine stunning design with powerful functionality to deliver exceptional user experiences."
    },
    {
      image: Devices,
      title: "Web deployment",
      description: "I ensure your applications are deployed securely and efficiently in the cloud using containerization best practices. My deployment pipeline includes robust CI/CD integration with Jenkins, comprehensive application monitoring, and performance optimization tools. This ensures your application runs smoothly in production while maintaining peak performance and reliability."
    },
    {
      image: Deploy,
      title: "IoT development",
      description: "I bridge the physical and digital worlds through innovative IoT solutions. Leveraging my expertise in sensor technology and real-time communication protocols like MQTT, I develop sophisticated APIs and intuitive user interfaces that enable seamless device integration and control. Whether it's monitoring systems or automated solutions, I bring smart technology to life."
    }
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