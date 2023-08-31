import React from 'react'
import {Grid, Button} from '@mui/material'
import Features from './Features';
import Company from './Company';
import Drawer from './DrawerSection'


function NavBar() {
  return (   
      <Grid className='container' container spacing={2}>
        <Grid container lg={10} xs={9}  spacing={5} direction='row' item>
            <Grid item>
                <p className='snap'>snap</p>
            </Grid>
            <Grid className='navDisplay1' item>
                <Features/>
            </Grid>
            <Grid className='navDisplay1' item>
                <Company/>
            </Grid>
            <Grid item>
                <p className='hover'>Careers</p>
            </Grid>
            <Grid item>
                <p className='hover'>About</p>
            </Grid>
        </Grid>
        <Grid className='register' lg={2} xs={3} container spacing={5} direction='row' item>
            <Grid item>
                <p className='hover'>Login</p>
            </Grid>
            <Grid item>
            <Button className='button' variant="outlined" size='medium' color='primary'>Register</Button>
            </Grid>
            <Grid className='drawer' item>
                <Drawer/>
            </Grid>
        </Grid>
      </Grid>
  );
}

export default NavBar