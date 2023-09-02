import React from 'react';
import { Grid } from '@mui/material';
import { Outlet, Link } from "react-router-dom";

type Props = {
    page: number;
    horizontal?: boolean;
}
function Tabbar(props: Props) {

   const {page} = props;
   const pages: string[] = ["Home", "Projects", "Research Areas", "Resume/CV"];
   const selectedStyle = {
    textDecoration: "underline",
   };
   const LinkItem = (index : number) => {
       const content = pages[index];
       const link = content == "Home" ? "/" : "/" + content.toLowerCase();
       if (index == page)
       {
        return <Link to={link} style={selectedStyle}>{content}</Link>
       } else {
           return<Link to={link}>{content}</Link>
       }
   }

   const direction = props.horizontal ? "row" : "column";
  return (
    <Grid
  container
  spacing={2}
  direction={direction}
  alignItems="center"
>

    {Array.from(Array(4)).map((_, index) => (
        <Grid item xs={3}>
            {LinkItem(index)}
        </Grid>
    ))}
</Grid>
  );
}


export default Tabbar;
