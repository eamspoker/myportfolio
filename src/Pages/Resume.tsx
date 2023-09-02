import * as React from 'react';
import Profile from './Profile';
import AboutMe from './AboutMe';
import { Grid } from '@mui/material';
import Right2Item from '../Components/Right2Item';
import Footer from '../Components/Footer';
import ProjectDescription from '../Components/ProjectDescription';


function Resume() {


  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="Resume">
        <Right2Item smallItem={<ProjectDescription name="Resume" skills="Last updated: 09/01/23" titles={[]} sections={[]}/>} bigItem={<iframe src="https://drive.google.com/file/d/1twDY4iUL66tbavStWcfUbufuG4r9VGai/preview" frameBorder="0" width="800em" max-width="100%" height="750em" allow="autoplay"></iframe>} page={0}/>

      <Footer />
    </div>
  );
}


export default Resume;
