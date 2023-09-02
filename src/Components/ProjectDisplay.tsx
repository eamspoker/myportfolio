import * as React from 'react';
import Profile from '../Pages/Profile';
import AboutMe from '../Pages/AboutMe';
import { Grid } from '@mui/material';
import Right2Item from './Right2Item';
import Footer from './Footer';
import ProjectContent from './ProjectContent';
import ProjectDescription from './ProjectDescription';

type Props = 
{
  name: string,
  skills: string,
  titles: Array<string>,
  sections: Array<string>,
  images?: Array<React.ReactNode>
}
function ProjectDisplay(props: Props) {


  return (
    <div>
        <Right2Item smallItem={ProjectDescription(props)} bigItem={ProjectContent(props)} page={1}/>

      <Footer />
    </div>
  );
}


export default ProjectDisplay;
