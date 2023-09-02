import { Grid } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';
import Tabbar from './Tabbar';
import Footer from './Footer';


type Props = {
  smallItem: React.ReactNode,
  bigItem: React.ReactNode,
  page: number,
}
function Right2Item(props: Props) {
  const {smallItem, bigItem, page} = props;

  const Item = styled("div")(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
  }));

  return (
    <Grid container spacing={2}>

      <Grid item xs={12}>
        </Grid>
        <Grid item xs={12}>
        </Grid> 

        <Grid item xs={1}>
        </Grid>

        <Grid item xs={10} sx={{ display: { xs: 'block', md: 'none' } }}>
          <Tabbar page={page} horizontal={true}/>
        </Grid> 


        <Grid item xs={12}>
        </Grid>

        <Grid item xs={3} md={1}>
        </Grid>


        

        <Grid item xs={6} md={2}>
        <Item>{smallItem}</Item>
        <Grid sx={{ display: { md: 'block', xs: 'none' } }}>
        <Tabbar page={page} />
        </Grid>
        </Grid>
        


        <Grid item xs={12} md={8}>
        <Item>{bigItem}</Item>
        </Grid>




        
        </Grid>
    
  );
}


export default Right2Item;
