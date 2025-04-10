import React, { useEffect } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import BackGround from "../../Components/background/background2";
import "animate.css";
import { gsap } from "gsap";
import { useRef } from "react";
import Name from "../../Components/name/name";
import About from "../../util/waveLetter/waveLetters";
import Animate from "../../util/animateLetters";
import WaveText from "../../Components/WaveAnimation";
import WaveTypewriter from "../../Components/WaveAnimation";
import { FaArrowDown, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import resumePDF from "../../assets/jerrygathucv.pdf";

type Props = {
  handleSlide?: (event: React.MouseEvent<Element>) => void;
  ref?: React.MutableRefObject<null>;
};

const Home: React.FC<Props> = ({ handleSlide }): JSX.Element => {
  const waveRef = useRef<HTMLInputElement>(null);

  function disableScroll() {
    // Get the current page scroll position
    let scrollTop = document.documentElement.scrollTop;
    let scrollLeft = document.documentElement.scrollLeft;

    window.addEventListener("scroll", () => {
    });
  }

  const titles = [
    "a Full Stack Developer",
    "a DevOps Engineer",
    "a Creative Developer",
    "an Innovator",
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-container");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="home-container" id="home-container">
      <BackGround />

      <div className="text-container md:mb-[2%]">
        <p>Hi there!</p>
        <div
          className="name"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0",
          }}
        >
          <p> I'm </p>
          <Name />
        </div>
        <p>
          <WaveTypewriter
            texts={titles}
            className="text-3xl font-bold"
            speed={80}
            delay={2500}
          />
        </p>

        <div className="cta-buttons">
          <button className="hire-button" onClick={scrollToContact}>
            Hire Me
          </button>
          <a
            href={resumePDF}
            download="JerryGathu_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-button"
          >
            View Resume
          </a>
        </div>
      </div>

      <div
        className="scroll-indicator"
        style={{ position: "absolute", bottom: "2%", left: "50%" }}
        onClick={handleSlide}
      >
        <FaArrowDown className="text-3xl text-teal-300 animate-pulse mb-4" />
        <About />
      </div>

      <div className="slider"></div>
      <div className="page_red"></div>
      <div className="page_blue"></div>
      <div className="page_black"></div>
    </div>
  );
};

export default Home;
