import * as React from 'react';
import Profile from './Profile';
import AboutMe from './AboutMe';
import { Grid } from '@mui/material';
import Right2Item from '../Components/Right2Item';
import Footer from '../Components/Footer';
import GridMenu from '../Components/GridMenu';


function Projects() {

  const titles = ["DIVIDER", "Khan Academy Discussions", "DIVIDER", "The Frame Game", "Climate Coach", "DIVIDER", "The Golem", "Zoo Displays", "DIVIDER", "Coffee Guide", "DIVIDER"];
  const subtitles = ["Industry", "Creating safer online forums for learners across the world", "Academic Research", "Game-based crowdsourcing for NLP", "Community health monitoring for open-source projects", "Classwork", "Reimagining folklore in an interactive way", "Balancing being informative and fun", "Just For Fun", "Passing down caffeine-based knowledge to underclassmen", ""];

  const components = ["", "/khanacademy", "", "/framegame", "/climatecoach", "", "/golem", "/zoo", "", "/coffeeguide", ""];

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
        <Right2Item smallItem={<div><h1>Projects</h1></div>} bigItem={<GridMenu titles={titles} subtitles={subtitles} components={components} />} page={1}/>

      <Footer />
    </div>
  );
}


export default Projects;
