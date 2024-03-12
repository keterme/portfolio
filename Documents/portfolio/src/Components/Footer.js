import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer_content'>
        <h1>Brandy. Unique. Efficient</h1>
        <ul>
          <li>Innovative solutions tailored just for you.</li>
          <li>Code designed to elevate your achievements.</li>
          <li>Your vision, my expertise. Let's create.</li>
        </ul>
        <div className='footer_line'></div>
        <div className='copyright'>
          <div className='logo'>
            <span className='ham-menu'></span>
          </div>
          <div className='rights'>
            <span className='rights-menu'>&copy;&nbsp;&nbsp;All Rights are Reserved</span>
          </div>
          <div className='socials'>
            <a href='https://www.linkedin.com/in/elvis-keter-507a22256/' target='blank'><FaLinkedinIn className='social'/></a>
            <a href='https://twitter.com/ketwaeps' target='blank'><FaXTwitter className='social'/></a>
            <a href='https://github.com/Elvis-keter' target='blank'><FaGithub className='social'/></a>
          </div>
        </div>
      </div>
    </div>
  )
}
