import { Grid } from '@mui/material';
import React from 'react';
import ProjectDisplay from '../../Components/ProjectDisplay';

function FrameGame() {
    const titles = ["Problem", "Reading literature", "Example notes", "IMAGE",  "Brainstorming and prototyping", "Writing and sharing", "Gameplay Diagram", "IMAGE"];
    const name = "The Frame Game";
    const sections = ["In the summer of 2022, I attended a summer research program at UC Berkeley. I was matched with the FrameNet project at the International Computer Science Institute. The project focused on creating and maintaining a database of frame semantic annotations. They wanted find a way of gathering and verifying user-generated annotations.", "I started off by reviewing a variety of papers. These papers varied from very specific (papers detailing how the FrameNet database works or focused on FrameNet’s previous crowdsourcing efforts) to very broad (papers that focused on frame semantics in general or crowdsourcing in general). This gave me a good idea of the different options available in the space of crowdsourcing. These included microwork (compensating workers for small tasks on an online platform), hosting the task on a citizen science platform, or creating a game to crowdsource annotations. Below is an example of some of the summaries and notes I made based on the papers.", "", "", "After researching, I explored most of the options I uncovered in my survey of the literature. The exception was microwork, which had previously been explored by the FrameNet project. During discussions with the head of the project, we decided that we wanted to create a method of crowdsourcing that centered user involvement and excitement about research. Unfortunately, many citizen science platforms were set up for natural science classification tasks or historical text transcription. Thus, we decided to implement a game where the user wrote and annotated stories. The goal of this game was to transparently crowdsource novel annotations for FrameNet while teaching them something about frame semantics. I then created a basic high visual and interaction fidelity prototype of the game using Unity.", "Being a part of a research program, I had the opportunity to summarize my work in a poster and presentation session. With the support of the FrameNet project, I was able to write a short paper to submit to the Data Science with Human-in-the-Loop: Language Advances workshop at the Empirical Methods in Natural Language Processing Conference. I was then able to attend the conference and present my work thanks to the support of the research program. Through all of these communication opportunities, I learned how to communicate my research process and findings in an effective manner.", "", ""];
    const skills = "Academic Research, Software Development";
    React.useEffect(() => {
      window.scrollTo(0, 0)
    }, [])



    const image1 = (<Grid
      container
      spacing={2}
      justifyContent="center"
      >

        <Grid item xs={12}>
          <img aria-aria-description="A screenshot of a spreadsheet of notes summarizing various papers." style={{
          width: "75%",
        }} src={require("../../Components/Assets/ReadingNotes.png")}></img>
        </Grid>
      </Grid>
    )

    const image2 = (<Grid
      container
      spacing={2}
      justifyContent="center"
      >

        <Grid item xs={12}>
          <img aria-aria-description="A flowchart of the gameplay of the Frame Game, in which users write stories, annotate their own stories, then review each other's annotations." style={{
          width: "75%",
        }} src={require("../../Components/Assets/FrameGame.png")}></img>
        </Grid>
      </Grid>
    )

    const images = [image1, image2]

    return (
    <ProjectDisplay name={name}
                    skills={skills} 
                    titles={titles} 
                    sections={sections}
                    images={images}
    />
  ); 
}


export default FrameGame;
