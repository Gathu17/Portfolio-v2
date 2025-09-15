import React, { useEffect } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import BackGround from "../../Components/background/background2";
import "animate.css";
import { gsap } from "gsap";
import { useRef } from "react";
import Name from "../../Components/name/name";
import About from "../../Components/aboutButton";
// import About from "../../util/waveLetter/waveLetters";
import Animate from "../../util/animateLetters";
import WaveText from "../../Components/WaveAnimation";
import WaveTypewriter from "../../Components/WaveAnimation";
import { FaArrowDown, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import resumePDF from "../../assets/jerrygathucv.pdf";
import { bubbleCursor } from "../../util/cursorEffect";

type Props = {
  handleSlide?: (event: React.MouseEvent<Element>) => void;
  ref?: React.MutableRefObject<null>;
};

const Home: React.FC<Props> = ({ handleSlide }): JSX.Element => {
  const homeRef = useRef<HTMLDivElement>(null);

  // Initialize bubble cursor effect
  useEffect(() => {
    let bubbleEffect: any;

    if (homeRef.current) {
      bubbleEffect = bubbleCursor({
        element: homeRef.current,
      });
    }

    // Cleanup function
    return () => {
      if (bubbleEffect && bubbleEffect.destroy) {
        bubbleEffect.destroy();
      }
    };
  }, []);

  const titles = [
    "a Full Stack Developer",
    "a DevOps Engineer",
    "a Creative Developer",
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-container");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="home-container" id="home-container" ref={homeRef}>
      <BackGround />

      {/* Content wrapper with blurred background */}
      <div className="content-wrapper">
        <div className="text-container md:mb-[2%]">
          <p>Hi there!</p>
          <div
            className="name"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              padding: "0",
              flexWrap: "wrap",
            }}
          >
            <p style={{ margin: "0", whiteSpace: "nowrap" }}> I'm </p>
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
          className="scroll-indicator flex flex-col items-center m-auto"
          style={{
            left: "50%",
            transform: "translateX(-50%)",
            width: "auto",
            minWidth: "120px",
          }}
          onClick={handleSlide}
        >
          <FaArrowDown className="text-lg text-teal-300 animate-pulse mb-2" />
          {/* <About /> */}
        </div>
      </div>

      <div className="slider"></div>
      <div className="page_red"></div>
      <div className="page_blue"></div>
      <div className="page_black"></div>
    </div>
  );
};

export default Home;
