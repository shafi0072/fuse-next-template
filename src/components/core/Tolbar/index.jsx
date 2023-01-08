import { ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Hidden from '@mui/material/Hidden';
import Toolbar from '@mui/material/Toolbar';
import clsx from 'clsx';
import { memo } from 'react';

import AdjustFontSize from '../shared-components/AdjustFontSize';
import FullScreenToggle from '../shared-components/FullScreenToggle';
import React from 'react';
import LanguageSwitcher from '../../../lib/LanguageSwitcher'
// import LanguageSwitcher from '../../shared-components/LanguageSwitcher';
// import NotificationPanelToggleButton from '../../shared-components/notificationPanel/NotificationPanelToggleButton';
import NavigationShortcuts from '../../../lib/NavigationShortcuts';
// import NavigationSearch from '../../shared-components/NavigationSearch';
// import NavbarToggleButton from '../../shared-components/NavbarToggleButton';
// import UserMenu from '../../shared-components/UserMenu';
// import QuickPanelToggleButton from '../../shared-components/quickPanel/QuickPanelToggleButton';
// import ChatPanelToggleButton from '../../shared-components/chatPanel/ChatPanelToggleButton';
import themeConfig from '../../../config/themeConfig';
import NavigationSearch from '../shared-components/NavigationSearch';
import QuickPanelToggleButton from '../shared-components/QuickPanelToggleButton';
import NotificationPanelToggleButton from '../shared-components/NotificationPanelToggleButton';
import UserMenu from '../shared-components/UserMenu';
const index = (props) => {
  return (
    <ThemeProvider theme={themeConfig}>
      <AppBar
        id="fuse-toolbar"
        className={clsx('flex relative z-20 shadow-md', props.className)}
        color="default"
        sx={{
          backgroundColor: themeConfig.palette.background.default
              
        }}
        position="static"
      >
        <Toolbar className="p-0 min-h-48 md:min-h-64">
          <div className="flex flex-1 px-16">
      
              <>
                <Hidden lgDown>
                 
                    {/* <NavbarToggleButton className="w-40 h-40 p-0 mx-0" /> */}
                

                  {/* {config.navbar.style === 'style-1' && !navbar.open && (
                    <NavbarToggleButton className="w-40 h-40 p-0 mx-0" />
                  )} */}
                </Hidden>

                <Hidden lgUp>
                  {/* <NavbarToggleButton className="w-40 h-40 p-0 mx-0 sm:mx-8" /> */}
                </Hidden>
              </>
       

            <Hidden lgDown>
                  <NavigationShortcuts/>
            </Hidden>
          </div>

          <div className="flex items-center px-8 h-full overflow-x-auto">
            <LanguageSwitcher/>

            <AdjustFontSize />

            <FullScreenToggle />

            <NavigationSearch/>
            

            <Hidden lgUp>
              
            </Hidden>

            <QuickPanelToggleButton/>
            <NotificationPanelToggleButton/>
            <UserMenu/>

          
          </div>

         
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default index;