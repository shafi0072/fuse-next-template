import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import React from 'react';


import FuseSvgIcon from '../../../lib/fuse/core/FuseSvgIcon';


function NotificationPanelToggleButton(props) {




  return (
    <IconButton
      className="w-40 h-40"
      // onClick={(ev) => dispatch(toggleNotificationPanel())}
      size="large"
    >
      <Badge color="primary" variant="dot" >
        {props.children}
      </Badge>
    </IconButton>
  );
}

NotificationPanelToggleButton.defaultProps = {
  children: <FuseSvgIcon>heroicons-outline:bell</FuseSvgIcon>,
};

export default NotificationPanelToggleButton;
