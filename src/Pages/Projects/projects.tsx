import React,{useEffect, useState} from 'react'
import './projects.css'
import Amg from '../../assets/Aimg.png'
import Emg from '../../assets/Eimg.png'
import Smg from '../../assets/Simg.png'
import Dimg from '../../assets/doc-review.png'
import Cimg from '../../assets/coverly.png'
import Pimg from '../../assets/portfolio.png'
import taskImg from '../../assets/task-manager.png'
import hotspotImg from '../../assets/hotspot-app.png'
import Chessimg from '../../assets/chess.png'
import Nannyimg from '../../assets/nanny.png'
import Eventimg from '../../assets/events.png'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'
import {FaGithub,FaLink} from 'react-icons/fa'
import { FiMonitor } from "react-icons/fi";
import { MdPreview } from "react-icons/md";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  color: string;
  isPrivate: boolean;
  isDemo: boolean;
  credentials?: {
    username: string;
    password: string;
  };
}

const projects: Project[] = [
  {
    id: 1,
    title: "Coverletter app",
    description: "An app that generates coverletters from resumes using GPT-3.",
    tags: ["React", "Nodejs","MongoDB", "OpenAI", "TailwindCSS"],
    image: Cimg,
    liveUrl: "https://coverly-ashy.vercel.app/",
    githubUrl: "https://github.com/Gathu17/coverly",
    color: "#4F46E5",
    isPrivate: false,
    isDemo: false
  },
  {
    id: 2,
    title: "Employee Task Manager",
    description: "Employee task management system with inventory management.",
    tags: ["React", "Laravel", "MYSQL","TailwindCSS"],
    image: taskImg,
    liveUrl: "",
    githubUrl: "https://github.com/ISP-Management/Employee-task-management",
    color: "#7C3AED",
    isPrivate: false,
    isDemo: true,
  },
  {
    id: 3,
    title: "Wireless Billing System",
    description: "Wireless Billing system for hotspot service integrated with mikrotik.",
    tags: ["React", "Laravel", "TailwindCSS", "MySQL"],
    image: hotspotImg,
    liveUrl: "",
    githubUrl: "https://github.com",
    color: "#EC4899",
    isPrivate: false,
    isDemo: true,
  },
  {
    id: 4,
    title: "Chessbot",
    description: "A chess game app with integrated chess bot",
    tags: ["React", "Nodejs", "TailwindCSS"],
    image: Chessimg,
    liveUrl: "",
    githubUrl: "https://github.com/Gathu17/Chessbot",
    color: "#EC4899",
    isPrivate: false,
    isDemo: false
  },
  {
    id: 5,
    title: "Nanny App",
    description: "An app that helps to connect clients to nannies and housekeepers",
    tags: ["Nuxt", "Adonisjs", "TailwindCSS"],
    image: Nannyimg,
    liveUrl: "https://nanny-web.vercel.app/welcome",
    githubUrl: "https://github.com",
    color: "#EC4899",
    isPrivate: false,
    isDemo: false,
    credentials: {
      username: "admin@gmail.com",
      password: "admin"
    }
  },
  {
    id: 6,
    title: "Events and Ticketing app",
    description: "An app where users can view upcoming events and buy tickets",
    tags: ["Vue", "Laravel", "TailwindCSS"],
    image: Eventimg,
    liveUrl: "https://events-ticketing-app-main-kbojci.laravel.cloud/",
    githubUrl: "https://github.com/Gathu17/events-ticketing-app",
    color: "#EC4899",
    isPrivate: false,
    isDemo: false
  },
  {
    id: 7,
    title: "E-commerce App",
    description: "An online clothing shop for both men and women",
    tags: ["React", "Styled-components", "Nodejs","GraphQL"],
    image: Emg,
    liveUrl: "https://my-duka.netlify.app",
    githubUrl: "https://github.com/Gathu17/E-commerce-client",
    color: "#EC4899",
    isPrivate: false,
    isDemo: false
  },
  
  {
    id: 8,
    title: "Document Review App",
    description: "Automated portfolio creation tool with customizable themes",
    tags: ["React", "GraphQL", "TailwindCSS"],
    image: Dimg,
    liveUrl: "https://doc-review.netlify.app/",
    githubUrl: "https://github.com/Gathu17/DocReview",
    color: "#EC4899",
    isPrivate: false,
    isDemo: false
  },
];
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function projectSlider() {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(".slide-container", {
      xPercent: -100,
      ease: "none",
      scrollTrigger: {
        trigger: ".projects-container",
        start: "top 30%",
        end: "+=80%",
        scrub: 2,
        pin: true,
        pinSpacing: true
      }
    });
  }

  const handleProjectHover = (projectId: string | number, isEntering: boolean): void => {
    gsap.to(`#overlay-${projectId}`, {
      opacity: isEntering ? 1 : 0,
      duration: 0.3
    });
  };

  const handleDemoRequest = (projectTitle: string) => {
    // You can implement your demo request logic here
    window.location.href = `mailto:your-email@example.com?subject=Demo Request for ${projectTitle}&body=I would like to request a demo for ${projectTitle}`;
  };

  const handleCredentialsClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  useEffect(() => {
    projectSlider()
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [])

  return (
    <div className="projects-container mt-10" id="projects-container">
      <h2 className='mb-5 text-2xl mt-14'>Some of the projects that I've worked on</h2>
    
      <div className="slide-container p-2 w-[1000vw] md:w-[700vw]">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card bg-white rounded-xl shadow-lg overflow-hidden m-3 w-[80vw] md:w-[45vw] lg:w-[40vw] h-[45vh] md:h-[40vh]"
            onMouseEnter={() => handleProjectHover(project.id, true)}
            onMouseLeave={() => handleProjectHover(project.id, false)}
          >
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div
                id={`overlay-${project.id}`}
                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center gap-3 opacity-0"
              >
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full hover:scale-110 transition-transform"
                    title="View Live"
                  >
                    <FiMonitor className="w-5 h-5"/>
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full hover:scale-110 transition-transform"
                    title="View Code"
                  >
                    <FaGithub className="w-5 h-5"/>
                  </a>
                )}
                {project.isDemo && (
                  <button
                    onClick={() => handleDemoRequest(project.title)}
                    className="p-2 bg-white rounded-full text-blue-600 hover:scale-110 transition-transform"
                    title="Request Demo"
                  >
                    Request Demo
                  </button>
                )}
              </div>
            </div>
            <div className="p-4">
              {/* <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold">{project.title}</h3>
                {project.isDemo && (
                  <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                    Demo Available
                  </span>
                )}
              </div> */}
              <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs rounded-full text-white"
                    style={{ backgroundColor: project.color }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {project.credentials && (
                <button
                  onClick={() => handleCredentialsClick(project)}
                  className="mt-2 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full transition-colors"
                >
                  View Credentials
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Credentials Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">{selectedProject.title} Credentials</h3>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Username</label>
                <div className="mt-1 relative">
                  <input
                    type="text"
                    readOnly
                    value={selectedProject.credentials?.username}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <div className="mt-1 relative">
                  <input
                    type="text"
                    readOnly
                    value={selectedProject.credentials?.password}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Projects
