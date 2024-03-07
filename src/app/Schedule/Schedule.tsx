import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { Box, Typography } from '@mui/material';


export default function Schedule() {
  return (
    <Box sx={{width:"100%", height:"auto"}}>
    <Timeline position="alternate" >
      <TimelineItem>
        <TimelineOppositeContent color="text.primary">
          DAY 1
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color='success' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent></TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          2:00 pm onwards
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot  color='error'/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Argumented Reality Workshop</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.primary">
          DAY 2
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color='success' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent></TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          9:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot  color='error'/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Informals</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          09:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color='error'/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Project Exhibition</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          10:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color='error'/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Tech Talk</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          09:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color='error'/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Web Dev Workshop</TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">

        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color='success' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Day 3</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.primary">
          Hackathon
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color='error'/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent color="text.secondary">9:00 am</TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color='error'/>
        </TimelineSeparator>
        <TimelineContent>End</TimelineContent>
      </TimelineItem>
    </Timeline>
    </Box>
  );
}

