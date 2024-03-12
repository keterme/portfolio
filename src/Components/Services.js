import React, {useEffect} from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import { Box, Typography } from '@mui/material'
import { FaAngular, FaNode, FaAws, FaJava} from "react-icons/fa";
import { SiJupyter, SiMongodb, SiSpring, SiOracle } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoFigma } from "react-icons/io5";
import { FaDocker } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";


export default function Services() {
  useEffect(() => {
		Aos.init({ duration: 2500 });
	}, []);
  
  return (
    <div className='services'>
      
        <div className='right-services'>
          <Box>
            <Typography
              sx={{
                fontFamily:"Inter, sans-serif",
                color:"#0ef",
                fontSize:"2rem",
                fontWeight:"800",
                top:"0%",
                textAlign:"center"
              }}
            >My Stacks</Typography>
            <Box 
              sx={{
                display: "grid",
                margin: "auto",
                ml:"4rem",
                gridTemplateColumns:"repeat(4, minmax(0,1fr))"
              }}
            >
              <Typography fontSize={80} mr={20}><TbBrandNextjs/></Typography>
              <Typography fontSize={80} mr={20}><FaNode/></Typography>
              <Typography fontSize={80} mr={20}><FaAngular/></Typography>
              <Typography fontSize={80}><FaJava/></Typography>

              <Typography fontSize={80} mr={20}><SiJupyter/></Typography>
              <Typography fontSize={80} mr={20}><IoLogoFigma/></Typography>
              <Typography fontSize={80} mr={20}><FaDocker/></Typography>
              <Typography fontSize={80}><FaAws/></Typography>

              <Typography fontSize={80} mr={20}><SiMongodb/></Typography>
              <Typography fontSize={80} mr={20}><GrMysql/></Typography>
              <Typography fontSize={80} mr={20}><SiSpring/></Typography>
              <Typography fontSize={80}><SiOracle/></Typography>
            </Box>
          </Box>
        </div>
      
      <div className='left-services'></div>
    </div>
  )
}
