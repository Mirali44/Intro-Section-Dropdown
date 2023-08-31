
import React from 'react';
import { Drawer, Box, IconButton, Button, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Features from './Features';
import Company from './Company'

function DrawerSection()  {
    const theme = createTheme({
        palette: {
          primary:{
            main: "#000",
          }
        },
      });
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <IconButton size="large" onClick={() => setIsOpen(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer open={isOpen} anchor="right" >
        <Box marginLeft={'10px'} width="230px" textAlign="left">
            <Box textAlign={'right'}>
            <ThemeProvider theme={theme}>
            <Button onClick={() => setIsOpen(false)} color='primary'><CloseIcon/></Button>
            </ThemeProvider>
            </Box>
            <Features/>
            <Company/>
            <p className='drawerLeft'>Careers</p>
            <p className='drawerLeft'>About</p>
            <Box marginTop={'60px'} textAlign={'center'}>
              <p>Login</p>
              <Button className='drawerButton'>Register</Button>
            </Box>
        </Box>
      </Drawer>
    </>
  );
};
export default DrawerSection