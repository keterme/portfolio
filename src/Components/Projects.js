import React, { useState } from 'react';
import { RiLinkM } from "react-icons/ri";
import { Typography } from '@mui/material';

const Projects = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  
  return (
    <div className='projects'>
      <Typography
        sx={{
          fontFamily:"Inter, sans-serif",
          color:"red",
          fontSize:"2rem",
          fontWeight:"800",
          top:"0%",
          textAlign:"center"
        }}
      >Sample Projects</Typography>
      <div className="grid portfolio__container">
        <article 
          className="portfolio__item"
          onMouseEnter={() => setIsHovered1(true)}
          onMouseLeave={() => setIsHovered1(false)}
        >
          {isHovered1 ? (
            <a href="https://github.com/keterme/intranet" target="_blank" rel="noopener noreferrer">
              <RiLinkM className='link-icon' />
            </a>
          ) : null}
          <div className="portfolio__item-image">
            <img src="https://elvisketer.netlify.app/static/media/rest.78b06f5b.jpg" alt="" height="180px"/>
          </div>
          <h3>Company Intranet Application</h3>
          <h4>Digitized their manual test report template and database system to a 
            presentable, user-friendly user interface that captures data straight from
            farm data collected, transforms into a pdf format, simultaneously storing 
            the data in a secure database.
          </h4>
        </article>
        
        <article 
          className="portfolio__item"
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)}
        >
          {isHovered2 ? (
            <a href="https://github.com/Bilkim/Data-Analysis-and-Visualization-of-Covid" target="_blank" rel="noopener noreferrer">
              <RiLinkM className='link-icon' />
            </a>
          ) : null}
          <div className="portfolio__item-image">
            <img src="https://elvisketer.netlify.app/static/media/ml.5cab7735.jpg" alt=""/>
          </div>
          <h3>Global Covid Data Visualization</h3>
          <h4>Analysis of Covid-19 data and outbreak predictions 
            and visualization using Machine Learning model. My team and I 
            consumed data, cleaned, trained, tested, plotted independent variables 
            against dependent variables and visualized using 
            Linear Regression
          </h4>
        </article>
        
        <article 
          className="portfolio__item"
          onMouseEnter={() => setIsHovered3(true)}
          onMouseLeave={() => setIsHovered3(false)}
        >
          {isHovered3 ? (
            <a href="https://github.com/Elvis-keter/MLM-system" target="_blank" rel="noopener noreferrer">
              <RiLinkM className='link-icon' />
            </a>
          ) : null}
          <div className="portfolio__item-image">
            <img src="https://elvisketer.netlify.app/static/media/mlm.6c6e5452.jpg" alt=""/>
          </div>
          <h3>Multilevel Marketing System</h3>
          <h4>System made in PHP and Laravel. Through direct referrals, users can 
            earn profit by utilizing the root and child node hierarchical tree
            technique, whereby for every referral to the system through your unique referral
            code, a small commission is granted.
          </h4>
        </article>
        
        <article 
          className="portfolio__item"
          onMouseEnter={() => setIsHovered4(true)}
          onMouseLeave={() => setIsHovered4(false)}
        >
          {isHovered4 ? (
            <a href="https://github.com/example" target="_blank" rel="noopener noreferrer">
              <RiLinkM className='link-icon' />
            </a>
          ) : null}
            <div className="portfolio__item-image">
              <img src="https://elvisketer.netlify.app/static/media/bouncyball.7edee7fc.jpg" alt=""/>
            </div>
            <h3>Chaos Ball Game Application</h3>
            <h4>A game created with Unity Hub software that involves balls bouncing off a cube 
              and surfaces inside a wall that is designed to look aesthetically pleasing and coded 
              to have that bouncy effect. Customization and runtime for design runs in 2D or 3D
            </h4>
        </article> 
      </div>  
    </div>
  );
}

export default Projects;
