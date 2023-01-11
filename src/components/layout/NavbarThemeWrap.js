import { ThemeProvider } from '@mui/material/styles';
import { memo } from 'react';

import React from 'react';
import themesConfig from '../../config/themeConfig';
import Navbar from '../core/Navbar'
import { defaultSettings, defaultThemeOptions } from '../../config/fuse/FuseDefaultSettings';
const NavbarThemeWrap = () => {
  return (
    <ThemeProvider theme={defaultThemeOptions}>
      <Navbar/>
    </ThemeProvider>
      
    
  );
};

export default NavbarThemeWrap;