import React,{useState} from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';

type Email = {
  name: string,
  email: string,
  subject: string,
  message: string
}
const Contact = () => {
 
  const [data, setData] = useState<Email>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
    function onSubmit(event: React.FormEvent) {
        event.preventDefault()
        
        emailjs.init(process.env.REACT_APP_PUBLIC_KEY as string);
        emailjs.send( process.env.REACT_APP_SERVICE_ID as string,  process.env.REACT_APP_TEMPLATE_ID as string, data)
        .then((result) => {
          console.log('SUCCESS');
      }, (error) => {
          console.log(error);
      });
      setData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
      var el = document.querySelector(".btn-text") as HTMLButtonElement;
      el.innerHTML = "";
      el.innerHTML = "SENT"
       }
       function onChange(e: React.FormEvent ){
        setData({...data, [(e.target as HTMLInputElement).name]:(e.target as HTMLInputElement).value})
        
       }
  
  return (
    <div className="contact-container" id="contact-container">
      <h2 style={{fontSize:"2rem",fontWeight:"bold" }}>Connect with me</h2>
               <p style={{width:"70%",margin:"auto"}}>
                Interested in working with me? Shoot me a textbelow and I'll get back to you as soon as I can.
                  I am available for freelance/remote opportunities. Say hi, let's connect.
                </p>
                <form onSubmit={onSubmit}>
                
                <input
                type="text"
                name='name'
                placeholder="Name"
                onChange={onChange}
                required
                />
                 <input
                type="email"
                name='email'
                placeholder="Email"
                onChange={onChange}
                required
                />
                 <input
                type="text"
                name='subject'
                placeholder="Subject"
                onChange={onChange}
                required
                />
                <textarea
                name="message"
                placeholder="Message"
                onChange={onChange}
                required
                ></textarea>
                <button type="submit"   className="form-button"><span className="btn-text">SUBMIT</span></button>
            </form>
    </div>
  )
}

export default Contact