import { Paper } from '@mui/material';
import { grey } from '@mui/material/colors';
import React from 'react';

function Profile() {

  const descriptionStyle = {
    color: "grey",
  }

  const headerStyle = {
    backgroundColor: "white",
    display: "block",
    alignItems: "center",
    justifyContent: "center",
  }


  const pfpStyle = {
    borderRadius: "50%",
    width: "90%"

  }

  const paperStyle = {
    borderRadius: "2%",
    padding: "10px",
  }

  return (
    <Paper style={paperStyle} elevation={0} >
    <header style={headerStyle}>
        <img aria-aria-description="Emily looking off to the side, wearing her Khan Academy t-shirt." src={require("./pfp.jpeg")} style={pfpStyle}></img>

        <h1>
          Hi, I'm Emily!
        </h1>
        <h5 style={descriptionStyle}>Thanks for visiting my personal website! I made this website with React using the Material UI Library. </h5>
      </header>
      </Paper>
  );
}


export default Profile;
