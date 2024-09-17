import React from 'react';
import { ButtonBase, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

type Props = {
    titles: Array<string>,
    subtitles:  Array<string>,
    components:  Array<string>,
}
function GridMenu(props: Props) {


   const {titles, subtitles, components} = props;

   const paperStyle = {
    borderRadius: "2%",
    padding: "10px",
    height: "100%",
  }

  return (
    <Grid
  container
  spacing={2}>

    {titles.map((title, index) => {
    if (title == "DIVIDER")
    {
      return (<Grid item xs={12}>
        
         <h2>{subtitles[index]}</h2>
      </Grid>);
    } else if (title == "TITLE")
    {
      return (<Grid item xs={12}>
         <h1>{subtitles[index]}</h1>
      </Grid>);
    } else
    {
      return (<Grid item xs={3}>
        <Link to={components[index]}>
          <Paper style={paperStyle} elevation={2} >
           <h3>{title}</h3>
           <p style={{fontSize:"1em",}}>{subtitles[index]}</p>
           </Paper>
           </Link>
        </Grid>);
      }
  })}
</Grid>
  );
}


export default GridMenu;
