import { createSlice } from '@reduxjs/toolkit';

const navbarSlice = createSlice({
  name: 'navbar',
  initialState: {
    open: true,
    mobileOpen: false,
  },
  reducers: {
    // @ts-ignore
    navbarToggleFolded: (state, action) => {
      // @ts-ignore
      state.foldedOpen = !state.foldedOpen;
    },
    // @ts-ignore
    navbarOpenFolded: (state, action) => {
      // @ts-ignore
      state.foldedOpen = true;
    },
    // @ts-ignore
    navbarCloseFolded: (state, action) => {
      // @ts-ignore
      state.foldedOpen = false;
    },
    // @ts-ignore
    navbarToggleMobile: (state, action) => {
      state.mobileOpen = !state.mobileOpen;
    },
    // @ts-ignore
    navbarOpenMobile: (state, action) => {
      state.mobileOpen = true;
    },
    // @ts-ignore
    navbarCloseMobile: (state, action) => {
      state.mobileOpen = false;
    },
    // @ts-ignore
    navbarClose: (state, action) => {
      state.open = false;
    },
    // @ts-ignore
    navbarOpen: (state, action) => {
      state.open = true;
    },
    // @ts-ignore
    navbarToggle: (state, action) => {
      state.open = !state.open;
    },
  },
});

export const {
  navbarToggleFolded,
  navbarOpenFolded,
  navbarCloseFolded,
  navbarOpen,
  navbarClose,
  navbarToggle,
  navbarOpenMobile,
  navbarCloseMobile,
  navbarToggleMobile,
} = navbarSlice.actions;

export const selectFuseNavbar = ({ fuse }) => fuse.navbar;

export default navbarSlice.reducer;
