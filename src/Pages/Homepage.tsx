import * as React from 'react';
import Profile from './Profile';
import AboutMe from './AboutMe';
import { Grid } from '@mui/material';
import Right2Item from '../Components/Right2Item';
import Footer from '../Components/Footer';


function Homepage() {


  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="Homepage">
        <Right2Item smallItem={<Profile/>} bigItem={<AboutMe/>} page={0}/>

      <Footer />
    </div>
  );
}


export default Homepage;
