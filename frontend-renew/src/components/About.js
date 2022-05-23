import React from "react";
import { Box, Container, Typography, Link } from '@mui/material';
import AppBar from "./AppBar";

export default function About() {
  return (
    <div style={{ backgroundImage: `url("https://www.teahub.io/photos/full/52-520305_cotton-candy-wallpapers-cnsoup-collections-evening.jpg")` }}>
    
    <AppBar/>
    
    <Container maxWidth="md" fixed>
      <Box sx={{ bgcolor: '#DFBFFF', height: '560px' }} fixed>
      <br></br>
      <Typography variant="h3" gutterBottom component="div" color={"#0A0A7E"}>
        About WebApp-v2
      </Typography>

      <Container maxWidth="sm" fixed>
      <Typography variant="h5" gutterBottom component="div">
        Introduction
      </Typography>
      <Typography variant="body2" gutterBottom>
        WebApp-v2 is an interactive web application for large scale data analysis, 
        developed using DL4J model. Registration requires an email activation security 
        from MailDev based with Spring Security backend. Login to access Dashboard page 
        that contains interactive chart and table for visualization. Parsing large data 
        with CSV import and export features are available for analysis and local saving.
      </Typography>
      <Typography variant="body2" gutterBottom>
        This is my 2nd project on web application project. Still learning on improvising the structure and 
        code development for backend and frontend. I would to give highest gratitude to my colleagues whom 
        helped and guided me throughout this project.
      </Typography>
      </Container>

      <br></br>

      <Container maxWidth="sm" fixed>
      <Typography variant="h5" gutterBottom component="div">
        Dev
      </Typography>
      <Typography variant="body2" gutterBottom>
        I am Amir, a graduate mechanical engineer from Universiti Sains Malaysia, pursuing 
        artificial intelligence and computer vision. I am a certified engineer in computer vision, accredited 
        by Skymind Education Group and Selangor Human Resource Development Center (SHRDC) in 2021. Worked as an AI engineer at Skymind Holdings Berhad, Penang for 2 months. 
        I have extensive knowledge on mechanical engineering, artificial intelligence, computer vision, Python,
        Java, JavaScript, and MS Office. Still learning on full-stack web development using Spring Boot and ReactJs.
      </Typography>
      </Container>
      </Box>

      <Box sx={{ bgcolor: '#C3FFED', height: '110px' }} fixed>
      <Link href="mailto: amir.kmrlzmn@gmail.com" underline="none" color="#4B4B4B">
        {'amir.kmrlzmn@gmail.com'}
      </Link>
      <br></br>
      <Link href="https://github.com/amirk98" underline="none" color="#4B4B4B">
        {'GitHub'}
      </Link>
      <br></br>
      <Link href="https://www.linkedin.com/in/muhammad-amir-kamarulzaman/" underline="none" color="#4B4B4B">
        {'LinkedIn'}
      </Link>
      <p></p>
      <Typography variant="caption" display="block" gutterBottom>
        © Copyright 2022
      </Typography>
      </Box>

      </Container>
      </div>
      
  );
}
