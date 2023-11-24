import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Burger() {
  return (
    <Box className="mt-5 " >
      <AppBar  position='static' style={{background:'black'}}>
          <IconButton style={{color:'white'}}>
            <MenuIcon  />
          </IconButton>
         
        
      </AppBar>
    </Box>
  );
}

