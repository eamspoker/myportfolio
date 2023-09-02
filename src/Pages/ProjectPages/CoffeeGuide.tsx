import { Grid } from '@mui/material';
import React from 'react';
import ProjectDisplay from '../../Components/ProjectDisplay';

function CoffeeGuide() {

    const imageStyle = {
      width: "100%",
    }
    const image = (<Grid
      container
      spacing={2}
      justifyContent="center"
      >

        <Grid item xs={4}>
          <img aria-description="The first page of a coffee guide Emily wrote, it focuses on coffee shops close to CMU." style={imageStyle} src={require("../../Components/Assets/CoffeeGuide.jpg")}></img>
        </Grid>
        <Grid item xs={4}>
          <img aria-description="The second page of a coffee guide Emily wrote, it focuses on campus coffee shops and Starbuckses." style={imageStyle} src={require("../../Components/Assets/CoffeeGuide2.jpg")}></img>
        </Grid>
        <Grid item xs={4}>
          <img aria-description="The third page of a coffee guide Emily wrote, it focuses on coffee shops in the greater Pittsburgh area." style={imageStyle} src={require("../../Components/Assets/CoffeeGuide3.jpg")}></img>
        </Grid>
      </Grid>
    )
    const images = [image];
    const titles = ["Problem",  "Process", "The Guide", "IMAGELINK"];
    const name = "Coffee Guide";
    const sections = ["At the beginning of my junior fall, I worked as an orientation counselor. I realized that by staying in Pittsburgh over the summer, I had acquired a lot of knowledge about coffee shops in the area and wanted to share it with the freshmen.", "I employed what I had learned in my interaction design studio about typography, color, and grid in order to make the guide pleasing to the eye yet informative. This was created within a couple of hours.", "", "https://drive.google.com/file/d/1v6E6saQyEi7tfCfH0bkgyf9zyYgThIwU/view?usp=drive_link"];
    const skills = "Visual Design";
    React.useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
    return (
        <ProjectDisplay name={name}
                    skills={skills} 
                    titles={titles} 
                    sections={sections}
                    images={images}
    />

    
  ); 
}


export default CoffeeGuide;
