import React, { useState } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import { FaWhatsappSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

type Email = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
const Contact = () => {
  const [data, setData] = useState<Email>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Add WhatsApp handler
  const handleWhatsAppClick = () => {
    const phoneNumber = "+254726945514";
    const message = encodeURIComponent("Hi, I'd like to connect with you!");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const handleEmailClick = () => {
    const email = "jjgathu17@gmail.com";
    const subject = encodeURIComponent("Let's Connect!");
    const body = encodeURIComponent("Hi, I'd like to connect with you!");
    window.open(`mailto:${email}?subject=${subject}&body=${body}`);
  };

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();

    emailjs.init(process.env.REACT_APP_PUBLIC_KEY as string);
    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID as string,
        process.env.REACT_APP_TEMPLATE_ID as string,
        data
      )
      .then(
        (result) => {
        },
        (error) => {
          console.log(error);
        }
      );
    setData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    var el = document.querySelector(".btn-text") as HTMLButtonElement;
    el.innerHTML = "";
    el.innerHTML = "SENT";
  }
  function onChange(e: React.FormEvent) {
    setData({
      ...data,
      [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement)
        .value,
    });
  }

  return (
    <div className="contact-container" id="contact-container">
      <h2 style={{ fontSize: "2rem", fontWeight: "bold", margin: "2% auto" }}>
        Connect with me
      </h2>
      <p style={{ width: "70%", margin: "auto" }}>
        Interested in working with me? Shoot me a text below or connect via
        WhatsApp. I'll get back to you as soon as I can. I am available for
        freelance/remote opportunities. Say hi, let's connect.
      </p>
    

      <div className="contact-options flex flex-col md:flex-row gap-4 w-full max-w-md mx-auto mb-8 px-2">
        <button
          className="whatsapp-button flex items-center justify-center w-full md:w-[45%] px-4 py-2 rounded-lg bg-green-500/60 hover:bg-green-500/40 transition-all"
          onClick={handleWhatsAppClick}
          type="button"
        >
          <FaWhatsappSquare className="w-6 h-6 md:w-8 md:h-8 mr-2 md:mr-5"/> 
          <span className="text-sm md:text-base">Connect on WhatsApp</span>
        </button>
        <button
          className="flex items-center justify-center w-full md:w-[45%] px-4 py-2 rounded-lg bg-blue-400/60 hover:bg-blue-400/40 transition-all"
          onClick={handleEmailClick}
          type="button"
        >
          <MdEmail className="w-6 h-6 md:w-8 md:h-8 mr-2 md:mr-5"/>
          <span className="text-sm md:text-base">Connect on Email</span>
        </button>
      </div>
     
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={onChange}
          required
          style={{ margin: "5% 2%", padding: "2% 10px" }}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={onChange}
          required
          style={{ margin: "5% 2%", padding: "2% 10px" }}
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          onChange={onChange}
          required
          style={{ margin: "5% 2%", padding: "2% 10px" }}
        />
        <textarea
          name="message"
          placeholder="Message"
          onChange={onChange}
          required
          style={{ margin: "5% 2%", padding: "2% 10px" }}
        ></textarea>
        <button type="submit" className="form-button">
          <span className="btn-text">SUBMIT</span>
        </button>
      </form>
      
    </div>
  );
};

export default Contact;
