import { Paper } from '@mui/material';
import React from 'react';


function AboutMe() {

  const descriptionStyle = {
    textAlign: "left" as const,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
    marginBottom: 10,
  }

  const paperStyle = {
    borderRadius: "2%",
    padding: "10px",
  }



  const aboutMeStyle = {

  }

  return (
    <Paper style={paperStyle} elevation={2} >
    <div style={aboutMeStyle}>
    <p style={descriptionStyle}>
      I'm a  junior at <a target="_blank" href="https://www.cmu.edu/">Carnegie Mellon University</a>. I study <a target="_blank" href="https://hcii.cmu.edu/academics/hci-undergrad/bs-human-computer-interaction">Human-Computer Interaction</a>, <a target="_blank" href="https://ideate.cmu.edu/undergraduate-programs/design-for-learning/index.html">Design For Learning</a>, and <a target="_blank" href="https://ideate.cmu.edu/undergraduate-programs/game-design/">Game Design</a>. I'm interested in educational technology, accessibility, and social computing. 
    </p>
    <p style={descriptionStyle}>
        This summer, I interned at <a target="_blank" href="http://www.khanacademy.org/">Khan Academy</a> as a Software Engineering Intern, where I helped create a high-quality accessible math-input keypad for their AI tutor and added auto-filtering heuristics for discussion moderation in their built-in forum. 
    </p>
    <p style={descriptionStyle}>
        I do research in the <a target="_blank" href="https://cmu-variability.github.io/research.html">Variability Lab</a> where I work on creating inclusive objects and interfaces. In the fall and spring of 2023, I worked on a project that focused on implementing a collaborative coding interface for students with autism. I'm currently working on a project that is being done in collaboration with the <a target="_blank" href="https://www.ri.cmu.edu/robotics-groups/textiles-lab/">Textiles Lab</a> centered around stim objects.
    </p>
    <p style={descriptionStyle}>
        Last year, I participated in the <a href="https://eecs.berkeley.edu/resources/undergrads/research/superb" target="_blank">SUPERB REU</a> at UC Berkeley. I worked on the <a target="_blank" href="https://framenet.icsi.berkeley.edu/">FrameNet Project</a>, where I designed and prototyped a crowdsourcing game for frame semantic annotation. I've also done research in the <a target="_blank" href="http://coexlab.com/">CoExperience Lab</a>, conducting interviews with open-source maintainers about a tool that monitors the health of their online communities.
    </p>
    </div>
    </Paper>
  );
}


export default AboutMe;
