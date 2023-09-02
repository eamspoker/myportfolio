import { Paper } from '@mui/material';
import React from 'react';

type Props = 
{
  name: string,
  skills: string,
  titles?: Array<string>,
  sections?: Array<string>,
}
function ProjectDescription(props: Props) {
  const {name, skills, titles, sections} = props;
  const descriptionStyle = {
    color: "grey",
  }

  const headerStyle = {
    backgroundColor: "white",
    display: "block",
    alignItems: "center",
    justifyContent: "center",
  }


  const paperStyle = {
    borderRadius: "2%",
    padding: "10px",
  }

  return (
    <Paper style={paperStyle} elevation={0} >
    <header style={headerStyle}>
        <h1>
          {name}
        </h1>
        <h5 style={descriptionStyle}>{skills}</h5>
      </header>
      </Paper>
  );
}


export default ProjectDescription;
