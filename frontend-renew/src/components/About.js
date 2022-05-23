import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function About() {
  return (
    <Box sx={{ width: '100%', maxWidth: 600 }} alignItems="center">
      <Typography variant="h2" gutterBottom component="div">
        About Me
      </Typography>
      <Typography variant="h4" gutterBottom component="div">
        Introduction
      </Typography>
      <Typography variant="body1" gutterBottom>
        My name is Muhammad Amir, a graduate mechanical engineer from Universiti Sains Malaysia who still learn on
        full-stack development and a certified engineer in machine vision, accredited by Skymind. Currently, work 
        as an AI engineer at Skymind Holdings Berhad, Penang. Due to unprecedented situations, I have
        been retrenched from the company after 2 months.
      </Typography>
      
      <Typography variant="overline" display="block" gutterBottom>
        email: amir.kmrlzmn@gmail.com
      </Typography>
      <Typography variant="overline" display="block" gutterBottom>
        LinkedIn: https://www.linkedin.com/in/muhammad-amir-kamarulzaman/
      </Typography>
    </Box>
  );
}
