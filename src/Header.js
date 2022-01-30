import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import HB from './i18n';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box className='logo'></Box>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            {HB.Title}
          </Typography>
          <Button color="inherit">Admin</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}