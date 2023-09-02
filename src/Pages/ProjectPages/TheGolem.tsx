import { Grid } from '@mui/material';
import React from 'react';
import ProjectDisplay from '../../Components/ProjectDisplay';

function Golem() {
    const titles = ["Problem",  "Game design", "Development image", "IMAGE", "Implementation", "Game", "IMAGE"];
    const name = "The Golem";
    const sections = ["Last semester, I took a class called Game Design, Prototyping, and Production. In this class, we were divided into teams of 4 or 5 and were tasked with creating games throughout the semester. For the final project in our class, our team was tasked with creating a game based on a fairy tale or folklore. Our team decided to adapt the story of the Golem into a game.",
    "We drew in particular from David Wisniewski’s picture book, which was set in 1500s Prague and featured a section where the Golem apprehended individuals who were spreading anti-semitic propaganda. Using this source material created a game with two phases. During the day, you help out townsfolk for the preparation for Sukkot and during the night you use the information you’ve collected to apprehend the criminal without being caught by guards.",
    "",
    "",
    "The implementation for the game truly tested the limits of my programming and game development abilities. Although I was supported by a wonderful team of consisting of an artist, a UI/UX designer, a producer, and another programmer, this game a lot of implementation and iteration. Not only were the mechanics complex, but we had a lot of tradeoffs that we needed to optimize. For example, we wanted it to feel like you were existing as a large clay man without seeming frustratingly slow. Similarly, we wanted the night scene to feel dark and disorienting without leaving the player completely lost.",
    "",
    ""];

    const skills = "Game Development";
    React.useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

    const imageStyle = {
      width: "200%",
    }
    const image = (<Grid
      container
      spacing={2}
      justifyContent="center"
      >

        <Grid item xs={4}>
          <img aria-aria-description="A screenshot of the Unity editor showing the game as a work in progress." style={imageStyle} src={require("../../Components/Assets/UnityEditor.png")}></img>
        </Grid>
        
      </Grid>
    )

    const image2 = (<Grid
      container
      spacing={2}
      justifyContent="center"
      >

        <Grid item xs={12}>
        <iframe src="https://itch.io/embed/2000108" width="552" height="167" frameBorder="0"><a href="https://eamspoke.itch.io/golem">Golem by eamspoke</a></iframe>        </Grid>
        
      </Grid>
    )
    const images = [image, image2];

    return (
    <ProjectDisplay name={name}
                    skills={skills} 
                    titles={titles} 
                    sections={sections}
                    images={images}
    />
  ); 
}


export default Golem;
