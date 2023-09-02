import { Grid } from '@mui/material';
import React from 'react';
import ProjectDisplay from '../../Components/ProjectDisplay';

function Zoo() {
    const titles = ["Problem",  "", "IMAGE", "Goals", "Lo & Mid fi iterations", "Final hi-fi iteration", "Final video prototype", "IMAGE"];
    const name = "Zoo Displays";
    const sections = ["In the fall of 2022, I was tasked placed on a team of four in my interaction design class and tasked with converting a variety of simulated data about the Pittsburgh Zoo (mainly logistical and event data as well as fictional user interviews) into 24 different displays that could be used in a theoretical scenario. This assignment stressed the importance of information architecture and using motion to communicate information to users.",
    "",
    "",
    "Throughout the project, the team aspired to achieve two goals. First, we wanted to decrease wait times by allowing users to more efficiently move throughout the zoo. Second, we wanted to increase engagement with shows and events. We also wanted the displays to be fun with some level of interaction.",
    "We started off by modeling the data through affinity clustering. We then used this clustering to identify certain needs that our displays could fill within the zoo. This data included showtimes, transportation data, location data, and sponsorship/special event information. After confirming these priorities, our team engaged in parallel lo-fi prototyping. After receiving critique on our lo-fi prototypes, we iterated on a static mid-fi prototype. During this time, we utilized color, grid, and typography to give the screens unified look. It was also during this time that we added in a screen that would bring up facts about your favorite animal if you spoke into it. We viewed this interaction as important in engaging more people in the mission of the zoo through technology.",
    "We then added in more information and polished our mid-fi prototype. Using suggestions from our critique, we added in motion as the final element to help better communicate changes in state (e.g. a train arriving or leaving) and give the screens a more lively appearance.",
    "",
    ""];

    const skills = "Interaction & Visual Design, Motion Graphics";
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
          <img aria-aria-description="A screenshot of a graphic of listing the two goals for the project." style={imageStyle} src={require("../../Components/Assets/Goals.jpg")}></img>
        </Grid>
        
      </Grid>
    )

    const image2 = (<Grid
      container
      spacing={2}
      justifyContent="center"
      >

      <Grid item xs={4}>
        <video width="200%" controls>
          <source src={require("../../Components/Assets/FinalDisplay.mp4")} type="video/mp4"></source>
        </video>
        </Grid>
        
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


export default Zoo;
