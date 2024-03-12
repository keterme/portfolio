import React from 'react'
import Tilt from 'react-parallax-tilt';

export default function About() {
  return (
    <div className='about'>
        <Tilt
          className='left-about'
          perspective={500}
          glareEnable={true}
          glareMaxOpacity={0.45}
          scale={1.02}
          gyroscope={true}
        >
        </Tilt>
        <div className='right-about'>
            <h2>
                Here, you get to see my progress over the years as an application software developer. 
                I have been privileged to work for some few companies that provided me with the 
                necessities to improve on my craft, and that is why I am honoured and motivated 
                to create more and more websites as I continue building my career.
            </h2>
        </div>
    </div>
  )
}
