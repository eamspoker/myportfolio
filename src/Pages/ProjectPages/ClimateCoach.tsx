import { Grid } from '@mui/material';
import React from 'react';
import ProjectDisplay from '../../Components/ProjectDisplay';

function ClimateCoach() {
    const titles = ["Problem",  "Previous Prototype", "IMAGE", "Think-aloud interviews", "Iterating", "Iterated Dashboard Prototype", "IMAGE"];
    const name = "Climate Coach";
    const sections = ["In the Spring of 2022, I had the opportunity to be involved with the Climate Coach project as part of the CoEx Lab at CMU. This project focused on creating a Github-based dashboard that allows open-source maintainers to monitor the health of their community. My role on the project was to help facilitate interviews with maintainers on a previously created prototype and begin to iterate on that prototype.", "", "", "I started off with cold-emailing a variety of interview subjects who maintained open-source repositories, attempting to meet with people from small, medium, and large projects. Once I was able to find some subjects willing to participate in the study, I conducted think-aloud interviews over Zoom. Since Climate Coach was the first academic research project I participated in, this process taught me quite a bit about ethical and responsible interview processes.", "After the interviews, I looked over and repaired the transcripts. From there, we drew conclusions about what could change about the prototype. From there, I created a preliminary revision that fixed some of the concerns about the prototype.", "", ""];
    const skills = "Academic Research, User-Centered Research";
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
          <img aria-aria-description="A screenshot of Emily's iteration Climate Coach prototype, which is an interactive graph of contributor statistics." style={imageStyle} src={require("../../Components/Assets/ClimateCoach.png")}></img>
        </Grid>
        
      </Grid>
    )

    const image2 = (<Grid
      container
      spacing={2}
      justifyContent="center"
      >

        <Grid item xs={4}>
          <img aria-aria-description="A screenshot of the first iteration of the Climate Coach prototype, which is a collection of static graphs of contributor statistics." style={imageStyle} src={require("../../Components/Assets/ClimateCoach0.png")}></img>
        </Grid>
        
      </Grid>
    )
    const images = [image2, image];

    return (
    <ProjectDisplay name={name}
                    skills={skills} 
                    titles={titles} 
                    sections={sections}
                    images={images}
    />
  ); 
}


export default ClimateCoach;
