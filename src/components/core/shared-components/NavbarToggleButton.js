import IconButton from '@mui/material/IconButton';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectFuseCurrentSettings, setDefaultSettings } from 'app/store/fuse/settingsSlice';
import _ from '../../../utils/lodash';
import useThemeMediaQuery from '../../../hooks/fuse/useThemeMediaQuery';
// import { navbarToggle, navbarToggleMobile } from 'app/store/fuse/navbarSlice';
import FuseSvgIcon from '../../../lib/fuse/core/FuseSvgIcon';
import React from 'react';
import { color } from '@mui/system';

function NavbarToggleButton(props) {
  // const dispatch = useDispatch();
  // const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
  // const settings = useSelector(selectFuseCurrentSettings);
  // const { config } = settings.layout;

  return (
    <IconButton
      className={props.className}
      color="secondary"
      size="small"
      
      // onClick={(ev) => {
      //   if (isMobile) {
      //     dispatch(navbarToggleMobile());
      //   } else if (config.navbar.style === 'style-2') {
      //     dispatch(
      //       setDefaultSettings(
      //         _.set({}, 'layout.config.navbar.folded', !settings.layout.config.navbar.folded)
      //       )
      //     );
      //   } else {
      //     dispatch(navbarToggle());
      //   }
      // }}
    >
      {props.children}
    </IconButton>
  );
}

NavbarToggleButton.defaultProps = {
  children: (
    <FuseSvgIcon size={20} color="white">
      heroicons-outline:view-list
    </FuseSvgIcon>
  ),
};

export default NavbarToggleButton;
