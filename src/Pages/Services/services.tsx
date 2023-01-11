import React,{useEffect,useState} from 'react'
import './services.css'
import 'animate.css';
import Design from '../../assets/blank_canvas.svg'
import Develop from '../../assets/programmer.svg'
import Devices from '../../assets/AI.svg'
import Deploy from '../../assets/maker_launch.svg'

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(isVisible)
        if (entry.isIntersecting) {
          setIsVisible(true);
          document.querySelector('.service')?.classList.add("animate__animated")
          document.querySelector('.service')?.classList.add("animate__fadeIn")
          observer.disconnect();
        }
      });
    });

    observer.observe(document.querySelector('#services-container') as HTMLDivElement);

    return () => {
      observer.disconnect();
    };
  }, []);  
  return (
    <div className="services-container" id="services-container">
      <h3>Services I offer</h3>
        <div className="service">
        <img src={Develop}></img>
            <h3 >Web development</h3>
            
            <hr style={{width: "50%", opacity: "0.5"}}/>
            <p>I build landing pages to full stack applications using the MERN stack to produce quality web apps 
               with all the awesome features you can imagine.
              </p>
        </div>
        <div className="service">
        <img src={Devices}></img>
           <h3>IoT development</h3> 
           
           <hr style={{width: "50%", opacity: "0.5"}}/>
           <p>
            Breathing life into devices gives me joy and as such using my knowledge on sensor technology, 
            I build APIs using Nodejs and UI that interact with devices using different technologies such as MQTT.
              </p>
        </div>
        <div className="service">
          <img src={Deploy}></img>
           <h3>Web deployment</h3> 
           
           <hr style={{width: "50%", opacity: "0.5"}}/>
            <p>
            I deploy your containerized web applications to cloud servers while integrating with CI/CD tools 
            such as Jenkins. I also integrate Application Performance Monitoring tools  that help you monitor you app in production.
              </p>
        </div>
    </div>
  )
}

export default Services