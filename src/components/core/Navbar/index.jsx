import React, { useState } from "react";
import { styled, ThemeProvider } from "@mui/material/styles";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Hidden from "@mui/material/Hidden";
import NavbarStyle1 from "./NavbarStyle1Content";
import themeConfig from "../../../config/themeConfig";
import { useTheme } from "@mui/material/styles";
// @ts-ignore
const navbarWidth = 280;

// @ts-ignore
const Root = styled("div")(({ theme, folded }) => ({
  display: "flex",
  flexDirection: "column",
  zIndex: 4,
  [theme.breakpoints.up("lg")]: {
    width: navbarWidth,
    minWidth: navbarWidth,
  },

  ...(folded && {
    [theme.breakpoints.up("lg")]: {
      width: 76,
      minWidth: 76,
    },
  }),
}));

const StyledNavbar = styled("div")(
  ({ theme, position, folded, foldedandopened, foldedandclosed }) => ({
    minWidth: navbarWidth,
    width: navbarWidth,
    maxWidth: navbarWidth,
    maxHeight: "100%",
    transition: theme.transitions.create(["width", "min-width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.shorter,
    }),

    ...(position === "left" && {
      left: 0,
    }),

    ...(position === "right" && {
      right: 0,
    }),

    ...(folded && {
      position: "absolute",
      width: 76,
      minWidth: 76,
      top: 0,
      bottom: 0,
    }),

    ...(foldedandopened && {
      width: navbarWidth,
      minWidth: navbarWidth,
    }),

    ...(foldedandclosed && {
      "& .NavbarStyle2-content": {
        "& .logo-icon": {
          width: 44,
          height: 44,
        },
        "& .logo-text": {
          opacity: 0,
        },
        "& .react-badge": {
          opacity: 0,
        },
        "& .fuse-list-item": {
          width: 56,
        },
        "& .fuse-list-item-text, & .arrow-icon, & .item-badge": {
          opacity: 0,
        },
        "& .fuse-list-subheader .fuse-list-subheader-text": {
          opacity: 0,
        },
        "& .fuse-list-subheader:before": {
          content: '""',
          display: "block",
          position: "absolute",
          minWidth: 16,
          borderTop: "2px solid",
          opacity: 0.2,
        },
        "& .collapse-children": {
          display: "none",
        },
      },
    }),
  })
);

// @ts-ignore
const StyledNavBar = styled("div")(({ theme, open, position }) => ({
  minWidth: navbarWidth,
  width: navbarWidth,
  maxWidth: navbarWidth,
  // @ts-ignore
  background: theme?.defaultDark?.palette?.background?.default,
  ...(!open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(position === "left" && {
      marginLeft: `-${navbarWidth}px`,
    }),
    ...(position === "right" && {
      marginRight: `-${navbarWidth}px`,
    }),
  }),
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const StyledNavbarMobile = styled(SwipeableDrawer)(({ theme, position }) => ({
  "& > .MuiDrawer-paper": {
    minWidth: navbarWidth,
    width: navbarWidth,
    maxWidth: navbarWidth,
    maxHeight: "100%",
    transition: theme.transitions.create(["width", "min-width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.shorter,
    }),
  },
}));

const Index = () => {
  const theme = useTheme();
  console.log(theme);
  const [folded, setFolded] = useState(false)

  return (
    <Root
      folded={ 1 }
      open={true}
      id="fuse-navbar"
      className="sticky top-0 h-screen shrink-0 z-20 shadow-5"
    >
      <Hidden lgDown>
        <StyledNavbar
         className="flex-col flex-auto"
          position={'left'}
          folded={true ? 1 : 0}
          foldedandopened={folded ? 1 : 0}
          foldedandclosed={!folded ? 1 : 0}
          onMouseEnter={() => {setFolded(true)}}
          onMouseLeave={() => {setFolded(false)}}
        >
          <NavbarStyle1 className="NavbarStyle2-content"/>
        </StyledNavbar>
      </Hidden>

      <Hidden lgUp>
        {/* <StyledNavBarMobile
          classes={{
            paper: "flex-col flex-auto h-full",
          }}
          anchor={"left"}
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
        </StyledNavBarMobile> */}
      </Hidden>
    </Root>
  );
};

export default Index;
