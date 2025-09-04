import { motion } from "framer-motion";
import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import Typography from "@mui/material/Typography";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="w-full min-h-screen bg-black py-16 px-6">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center text-4xl font-extrabold text-gray-100 font-serif mb-16 tracking-wide"
      >
        My Experience
      </motion.h2>

      {/* Timeline */}
      <Timeline position="alternate">
        {/* Item 1 */}
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            className="text-gray-400"
          >
            3 Months
          </TimelineOppositeContent>

          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary" sx={{ width: 60, height: 60 }}>
              <WorkIcon fontSize="large" />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>

          <TimelineContent sx={{ py: "20px", px: 3 }}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h4"
                component="span"
                fontWeight="bold"
                className="text-white"
              >
                VyanWebs Pvt. LTD
              </Typography>
              <Typography variant="h6" className="text-gray-300 mt-1">
                MERN Stack Intern
              </Typography>
              <Typography
                variant="body1"
                className="text-gray-400 leading-relaxed mt-2"
              >
                During my MERN Stack Development internship, I worked on
                building and maintaining full-stack web applications using
                MongoDB, Express.js, React, and Node.js. I contributed to
                developing responsive UIs, integrating REST APIs, and ensuring
                smooth frontend-backend communication. This enhanced my
                problem-solving, teamwork with Git/GitHub, and practical
                full-stack skills.
              </Typography>
            </motion.div>
          </TimelineContent>
        </TimelineItem>

        {/* Item 2 */}
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            className="text-gray-400"
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

          <TimelineContent sx={{ py: "20px", px: 3 }}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Typography variant="h5" component="span" className="text-white">
                Bachelor of Business Administration
              </Typography>
              <Typography
                variant="body1"
                className="text-gray-400 leading-relaxed mt-2"
              >
                K.K. Vigyan Avan Vyavasaik Adhyayan Mahavidyalaya, Indore
              </Typography>
            </motion.div>
          </TimelineContent>
        </TimelineItem>

        {/* Item 3 */}
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            className="text-gray-400"
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

          <TimelineContent sx={{ py: "20px", px: 3 }}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Typography variant="h5" component="span" className="text-white">
                Self-Driven Projects & Skill Development
              </Typography>
              <Typography
                variant="body1"
                className="text-gray-400 leading-relaxed mt-2"
              >
                Actively enhancing my skills by working on personal MERN stack
                projects, experimenting with new tools and frameworks, and
                applying concepts through hands-on development to strengthen
                problem-solving and technical expertise.
              </Typography>
            </motion.div>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </section>
  );
}
