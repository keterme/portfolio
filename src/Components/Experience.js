import React from 'react';
import { Typography, useTheme } from '@mui/material';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import CodeIcon from '@mui/icons-material/Code';

const Experience = () => {
  const theme = useTheme();

  return (
    <div className='experience'>
      <div className='first'>
        <div className='experienceheader'>Mobile Gaming Development</div>
        <Typography textAlign="center" p={1}>------------------------------ </Typography>  
        <div className='header__content'>
          Eagerly engaged in development of gaming applications using the Unity Hub
           software like Chaos Ball, Gauntlet runner and more. 
        </div>
        <Typography mt={{ xs: 0, sm: 8 }} textAlign="center" p={1}>------------------------------ </Typography>
        <SportsEsportsIcon sx={{ml:{ xs: "114px", sm: "99px" }, fontSize:"50px"}}/>
      </div>
      <div className='second'>
        <div className='experienceheader'>Machine Learning and Data Science</div>
        <Typography textAlign="center" p={1}>------------------------------------</Typography>  
        <div className='header__content'>
          Experienced in data analysis and visualization. Developed models using 
          different algorithms to predict outcomes from datasets and open source data.
        </div>
        <Typography mt={{ xs: 0, sm: 5.2 }} textAlign="center" p={1}>------------------------------------</Typography>
        <StackedBarChartIcon sx={{ml:{ xs: "114px", sm: "99px" }, fontSize:"50px"}}/>
      </div>
      <div className='third'>
        <div className='experienceheader'>Fullstack Application Development</div>
        <Typography textAlign="center" p={1}>--------------------------------</Typography>  
        <div className='header__content'>
           Bold in utilizing frontend and backend stacks, tools and frameworks
            to generate a working system that reads,fetches, updates small scale and large scale data.
        </div>
        <Typography textAlign="center" p={1}>--------------------------------</Typography>
        <CodeIcon sx={{ml:{ xs: "114px", sm: "99px" }, fontSize:"50px"}}/>
      </div>  
    </div>
  )
}

export default Experience
