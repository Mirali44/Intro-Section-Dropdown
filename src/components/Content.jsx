import React from 'react'
import {Grid, Button} from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Content() {
    const theme = createTheme({
        palette: {
          primary:{
            main: "#000",
          }
        },
      });
  return (
    <Grid className='contentContainer' padding={20} paddingTop={12} spacing={5} container>
        <Grid className='contentPadding' paddingRight={10}  lg={6}  item>
            <p className='h1'>Make remote work</p>
            <p className='pPadding' style={{lineHeight:'27px',paddingRight:'50px'}}>Get your team in sync, no matter your location.
               Streamline processes, create team rituals, and watch 
               productiviy soar.
            </p>
            <ThemeProvider theme={theme}>
            <Button className='button2' variant='contained' color='primary'>Learn more</Button>
            </ThemeProvider>
            <Grid container justifyContent={'center'} spacing={{lg:5, xs:2}} style={{marginTop:"90px"}}>
                <Grid item><img className='bottomImages' src="../images/client-databiz.svg" alt="" /></Grid>
                <Grid item><img className='bottomImages' src="../images/client-audiophile.svg" alt="" /></Grid>
                <Grid item><img className='bottomImages' src="../images/client-meet.svg" alt="" /></Grid>
                <Grid item><img className='bottomImages' src="../images/client-maker.svg" alt="" /></Grid>
            </Grid>
        </Grid>
        <Grid className='image' lg={6}   item></Grid>
    </Grid>
  )
}

export default Content