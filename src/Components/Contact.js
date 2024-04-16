import React, {useRef} from 'react'
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosMailOpen } from "react-icons/io";
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_8361qho', 'template_l5nnjas', form.current, {
        publicKey: 'LS3evPF4DANc_BZzF',
      })
      .then(
        () => {
          toast.success('Message sent successfully');
          resetFormFields();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const resetFormFields = () => {
    form.current.reset(); 
  };
  
  
  return (
    <div className='contact'>
      <div className='bluecontact'>
        <div className='paragraphone'>
          <h3>Do you want to collaborate or recruit me to build a website for you?
            Kindly let me know.
          </h3>
        </div>
        <div className='paragraphtwo'>
          <h2>Contact Info:</h2>
          <div className='para'>
            <div className='contactlabels'>
              <a className='icons' href='mailto:ketere254@gmail.com' target='blank'>
                <IoIosMailOpen/>
              </a>
              <div className='icons'>
                <BsFillTelephoneFill/>
              </div>
            </div>
            <div className='contactinfo'>
              <div className='info'>Email : ketere254@gmail.com</div>
              <div className='info'>Phone number : 0741457808</div>
            </div>
            <div className="container">
              <div className="arrow-wrapper">
                <div className="arrow"></div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div className='one'>Get in touch</div>
        <caption>Contact me via email or leave a message for me and I will get back to you within the shortest time</caption>
        <div className='two'>
          <div className='fnandln'>
            <label>First Name</label>
            {/* <input type='hidden' name='_next' value="//https://localhost:3000" />
            <input type='hidden' name='_captcha' value="false" /> */}
            <input type='text' name='first_name' id='first_name' placeholder='Type your first name here...' required/>
          </div>
          <div className='fnandln'>
            <label>Second Name</label>
            <input type='text' name='last_name' id='last_name' placeholder='Type your last name here...' required/>
          </div>
        </div>
        <div className='three'>
          <div className='fnandln'>
            <label>Email</label>
            <input type='email' name='user_email' id='email' placeholder='Type your email here...' required/>
          </div>
        </div>
        <div className='four'>
          <div className='fnandln'>
            <label>Message</label>
            <textarea name='message' id='message' placeholder='Send me something ...' required/>
          </div>
        </div>
        <button type='submit' className='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Contact
