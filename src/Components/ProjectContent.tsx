import { Grid, Paper } from '@mui/material';
import { createRequire } from 'module';
import React from 'react';

import CoffeeGuide from './Assets/CoffeeGuide.jpeg';

type Props = 
{
  name: string,
  skills: string,
  titles: Array<string>,
  sections: Array<string>,
  images?: Array<React.ReactNode>
}
function ProjectContent(props: Props) {

  const paperStyle = {
    borderRadius: "2%",
    padding: "10px",
    alignItems: "center",
  }



  const {name, skills, titles, sections, images} = props;

  let imageCounter = 0;

  return (titles.map((title, index) => {
      if (title == "IMAGE")
      {
       
        const img =  images ? images[imageCounter] : <div></div>;
        imageCounter++;
        return img;

      }

      if (sections[index] == "")
      {
        return index%2 == 0 ? (<Grid
          container
          spacing={2}
          justifyContent="left"
          >
            <Grid item xs={3}>
            <h2 style={{textAlign: "left"}}>{title}</h2>
            </Grid>
            <Grid item xs={9}>
            </Grid>
          </Grid>) : 
          (<Grid
            container
            spacing={2}
            justifyContent="left"
            >
              <Grid item xs={9}>
              </Grid>
              <Grid item xs={3}>
              <h2 style={{textAlign: "right"}}>{title}</h2>
              </Grid>
            </Grid>);
      }
      return index%2 == 0 ? (<Grid
        container
        spacing={2}
        justifyContent="left"
        >
          <Grid item xs={3}>
          <h2 style={{textAlign: "left"}}>{title}</h2>
          </Grid>
          <Grid item xs={9}>
          </Grid>
          <Grid item xs={12}>
          <Paper style={paperStyle} elevation={2} >
          <p style={{textAlign: "left", fontSize:"1em",}}>{sections[index]}</p>
           </Paper>
        </Grid>
        </Grid>) : 
        (<Grid
          container
          spacing={2}
          justifyContent="left"
          >
            <Grid item xs={9}>
            </Grid>
            <Grid item xs={3}>
            <h2 style={{textAlign: "right"}}>{title}</h2>
            </Grid>
            <Grid item xs={12}>
            <Paper style={paperStyle} elevation={2} >
              <p style={{textAlign: "left", fontSize:"1em",}}>{sections[index]}</p>
             </Paper>
          </Grid>
          </Grid>)
  }));
}


export default ProjectContent;
