import React from "react";
import { styled } from "@mui/material/styles";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Hidden from "@mui/material/Hidden";
import NavbarStyle1 from './NavbarStyle1Content'
// @ts-ignore
const navbarWidth = 280;

// @ts-ignore
const StyledNavBar = styled('div')(({ theme, open, position }) => ({
  minWidth: navbarWidth,
  width: navbarWidth,
  maxWidth: navbarWidth,
  ...(!open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(position === 'left' && {
      marginLeft: `-${navbarWidth}px`,
    }),
    ...(position === 'right' && {
      marginRight: `-${navbarWidth}px`,
    }),
  }),
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const StyledNavBarMobile = styled(SwipeableDrawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    minWidth: navbarWidth,
    width: navbarWidth,
    maxWidth: navbarWidth,
  },
}));

const Index = () => {
  return (
    <>
    <Hidden lgDown>
      <StyledNavBar
        className="flex-col flex-auto sticky top-0 overflow-hidden h-screen shrink-0 z-20 shadow-5"
        // @ts-ignore
        open={true}
        position={'left'}
      >
       <NavbarStyle1 />
      </StyledNavBar>
    </Hidden>

    <Hidden lgUp>
      <StyledNavBarMobile

    
        classes={{
          paper: 'flex-col flex-auto h-full',
        }}
        anchor={'left'}
        variant="temporary"
        open={true}
        // onClose={() => dispatch(navbarCloseMobile())}
        // onOpen={() => {}}
        disableSwipeToOpen
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <NavbarStyle1 />
      </StyledNavBarMobile>
    </Hidden>
  </>
  );
};

export default Index;
