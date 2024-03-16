import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { Box, Typography } from '@mui/material';
import { Heading } from '../Common/heading';

export default function Schedule() {
  return (
    <Box sx={{ width: "100%", height: "auto" }}>
      <Heading title="Timeline" />

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
            <TimelineDot color='error' />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>UI/UX and Web Workshop</TimelineContent>
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
            7:00 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color='error' />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>HackBlitz</TimelineContent>
        </TimelineItem>


        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            9:00 pm
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color='error' />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>AI/ML Workshop</TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent color="text.primary">
            DAY 3
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color='success' />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent></TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            7:00 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color='error' />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Project Exhibition</TimelineContent>
        </TimelineItem>


        <TimelineItem>
          <TimelineOppositeContent color="text.primary">
            DAY 4
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color='success' />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent></TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            7:00 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color='error' />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Informals</TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            7:00 pm
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color='error' />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>SkillMafia workshop</TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color='error' />
            {/* <TimelineConnector /> */}
          </TimelineSeparator>
          <TimelineContent>End</TimelineContent>
        </TimelineItem>

      </Timeline>
    </Box>
  );
}

