



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
    <div style={{ maxHeight: "500px", overflowY: "auto", padding: "10px" }}>
      <Timeline position="alternate">
        {/* Item 1 */}
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            Nov 2023 – Present
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <WorkIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              BlackWallet LTD
            </Typography>
            <Typography>Frontend Developer</Typography>
          </TimelineContent>
        </TimelineItem>

        {/* Item 2 */}
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            Apr 2024 – Present
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="secondary">
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Manabu Method
            </Typography>
            <Typography>Software Developer</Typography>
          </TimelineContent>
        </TimelineItem>

        {/* Item 3 */}
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            2021 – 2023
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Bachelor of Computer Science
            </Typography>
            <Typography>XYZ University</Typography>
          </TimelineContent>
        </TimelineItem>

        {/* 👇 tu aur items add kar sakta hai */}
      </Timeline>
    </div>
  );
}

