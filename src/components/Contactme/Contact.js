import React,{useRef} from 'react'
import './Contact.css'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'
import instagram from '../../assets/instagram.png'
import gmail from '../../assets/gmail.png'
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_48jnw1p', 'template_qdcmoi3', form.current, {
        publicKey: 'uylwHBthxMmpLCYxl',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert('email sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section className='contact' id='contact'>
      <div className='contact-container'>
       <span className='contact-title'>Contact me</span>
       <p className='contact-para'>Please fill out the form below to discuss any work opportunities</p>
       </div>

       <div className='contact-form'>
        <form className='form' ref={form} onSubmit={sendEmail}>
            <input type='text' placeholder='Name' className='form-input'  name='your_name'required />
            <input type='email' placeholder='Your Email' className='form-input' name='your_email' required />
            <textarea placeholder='your Message' className='form-textarea'  name='message'required></textarea>
            <button type='submit' className='form-button'>Submit</button>
            <span className='form-message'>Thank you for reaching out!</span>
        </form>
       </div>

       <div className='contact-media'>
        <a href='https://www.linkedin.com/in/dinesh-yadav-mayle/' target='_blank'rel='noreferrer'>
          <img src={linkedin} alt='Linkedin' className='icon'/>
          </a>

        <a href="https://github.com/" target="_blank" rel="noreferrer">
          <img src={github} alt='github' className='icon'/>
        </a>

        <a href="https://www.instagram.com/dinesh_yadav234/?hl=en" target="_blank" rel="noreferrer">
          <img src={instagram} alt='instagram' className='icon'/>
        </a>

        <a href="mailto:dineshdineshyadav108@gmail.com">
          <img src={gmail} alt='gmail' className='icon'/>
        </a>
       </div>

    </section>
  )
}
export default Contact
