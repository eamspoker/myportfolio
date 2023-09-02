import { Grid } from '@mui/material';
import React from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';


function Footer() {


    const footerStyle = {
        backgroundColor: "black",
        marginTop: "auto",
    };
    const iconStyle = {
      padding: "10px",
    }
  return (
      <Grid container spacing={2}>
          <footer style={footerStyle}>
          </footer>
        </Grid>
          
  );
}


export default Footer;
