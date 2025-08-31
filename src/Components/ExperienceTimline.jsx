


import { motion } from "framer-motion";

import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import Typography from "@mui/material/Typography";

export default function ExperienceTimeline() {
  return (
    
    // 👇 yeh wrapper scroll banayega
    <div className="w-full  min-h-screen bg-black py-10 px-6 overflow-y-auto">
      <Typography
    variant="h3"
    align="center"
    gutterBottom
    sx={{ color: "white", fontWeight: "bold", mb: 5 }}
  >
    My Skills
  </Typography>
      
      <Timeline position="alternate">
        {/* Item 1 */}
      
      
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            3 months
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary" sx = {{width: 60 , height:60}}>
              <WorkIcon fontSize="large" />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
             <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      viewport={{ once: true }}
    >
            <Typography variant="h4" component="span" fontWeight="bold" color="white">
              VyanWebs.Pvt.LTD
            </Typography>
            <Typography variant="h6" color="gray">MERN STACK INTERN</Typography>
            <Typography variant="h7" color="gray">During my MERN Stack Development internship, I worked on building and maintaining full-stack web applications using MongoDB, Express.js, React, and Node.js. I contributed to developing responsive user interfaces, integrating REST APIs, and ensuring smooth frontend-backend communication. This experience helped me strengthen my problem-solving skills, collaborate effectively in a team environment using Git/GitHub, and gain practical exposure to modern web development practices.</Typography>
            </motion.div>
          </TimelineContent>
          
          
        </TimelineItem>

  
     

       {/* Item 2 */}   
<TimelineItem>
    
  <TimelineOppositeContent
  
    sx={{ m: "auto 0" }}
    align="right"
    variant="body2"
    color="white" // 👈 white kar diya
  >
    2023 – 2026
  </TimelineOppositeContent>

  <TimelineSeparator>
    <TimelineConnector />
    <TimelineDot color="primary">
      <SchoolIcon />
    </TimelineDot>
    <TimelineConnector />
  </TimelineSeparator>

  <TimelineContent sx={{ py: "18px", px: 2 }} >
       <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      viewport={{ once: true }}
    >
    {/* Heading */}
    <Typography variant="h5" component="span" color="white">
      Bachelor of Business Administration
    </Typography>

    {/* Subtext */}
    <Typography
      variant="body1"
      color="white"
      sx={{ display: "block", mt: 1, whiteSpace: "normal" }} // 👈 wrap karega
    >
      K.K. Vigyan Avan Vyavasaik Adhyayan Mahavidyalaya, Indore
    </Typography>
    </motion.div>
  </TimelineContent>
</TimelineItem>

        {/* 👇 tu aur items add kar sakta hai */}
      </Timeline>
      
      {/* Item 3 */}
       
<TimelineItem>
   
  <TimelineOppositeContent
    sx={{ m: "auto 0" }}
    align="right"
    variant="body2"
    color="white" // 👈 white kar diya
  >
    Current
  
  </TimelineOppositeContent>

  <TimelineSeparator>
    <TimelineConnector />
    <TimelineDot color="primary">
      <SchoolIcon />
    </TimelineDot>
    <TimelineConnector />
  </TimelineSeparator>

  <TimelineContent sx={{ py: "18px", px: 2 }} >
     <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
    {/* Heading */}
    <Typography variant="h5" component="span" color="white">
     Self-Driven Projects & Skill Development
    </Typography>

    {/* Subtext */}
    <Typography
      variant="body1"
      color="white"
      sx={{ display: "block", mt: 1, whiteSpace: "normal" }} // 👈 wrap karega
    >
     Actively enhancing my skills by working on personal MERN stack projects, experimenting with new tools and frameworks, and applying concepts through hands-on development to strengthen problem-solving and technical expertise.
    </Typography>
    </motion.div>
  </TimelineContent>
</TimelineItem>
             
    </div>
  );
}

