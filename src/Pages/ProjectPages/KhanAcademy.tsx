import { Grid } from '@mui/material';
import React from 'react';
import ProjectDisplay from '../../Components/ProjectDisplay';

function KhanAcademy() {
    const titles = ["Problem", "Example Discussion", "IMAGE", "Communication with stakeholders",  "Implementation", "Documentation"];
    const name = "Khan Academy Discussions";
    const sections = ["For the last few weeks of my internship at Khan Academy, I worked on improving the low-quality filtering for their discussion forums. The problem of creating more filters was an ambiguous one that prompted me to think about ways of lightening moderators’ load by automatically detecting unsafe or discursive posts without stifling the enjoyment of learners on the site.", "","",
    "Being at Khan Academy, I was lucky to have direct access to one set of stakeholders: the support team, who worked through the queue of flagged posts. They explained that they were receiving complaints about low-quality posts proliferating discussions because of key gaps in the automatic flagging. Throughout this process, I kept these stakeholders informed of new features or roadblocks in development.", "I implemented the filters by adding them on to the pre-existing filter code. At first, I thought this process would be straightforward. Unfortunately, the system of flagging posts wasn’t set up in a way that allowed for posts to be consistently flagged given a certain condition. As a result, I had to discuss some options for refactoring code with a senior developer before settling on the direction that we ended up taking. Moreover, by reading through the code carefully I was also able to uncover previously overlooked issues with the filtering system.", "Throughout the process of the project, I realized that there was a lack of clear solid documentation about how these filters worked. Since I was nearing the end of my internship, I decided to put all of the knowledge I had gained into a document for both the support and engineering teams to use. It was challenging to write a document that would make sense for both teams and would address the documentation gap I noticed. In the end, it was great to have a final artifact that encapsulated the learning I did throughout the course of this project."];
    const skills = "Software Development";
    React.useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
    const imageStyle = {
      width: "50%",
    }

    const image = (<Grid
      container
      spacing={2}
      justifyContent="center"
      >

        <Grid item xs={12}>
          <img aria-aria-description="An example Khan Academy discussion page, where students are discussing imaginary numbers." style={imageStyle} src={require("../../Components/Assets/Discussions.png")}></img>
        </Grid>
      </Grid>
    )

    const images = [image]
    
  return (
    <ProjectDisplay name={name}
                    skills={skills} 
                    titles={titles} 
                    sections={sections}
                    images={images}
    />
  ); 
}


export default KhanAcademy;
