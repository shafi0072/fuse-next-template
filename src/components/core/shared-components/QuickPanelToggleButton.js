
import IconButton from '@mui/material/IconButton';
import React from 'react';
import FuseSvgIcon from '../../../lib/fuse/core/FuseSvgIcon';


function QuickPanelToggleButton(props) {
  // const dispatch = useDispatch();

  return (
    <IconButton className="w-40 h-40"  size="large">
      {props.children}
    </IconButton>
  );
}

QuickPanelToggleButton.defaultProps = {
  children: <FuseSvgIcon>heroicons-outline:bookmark</FuseSvgIcon>,
};

export default QuickPanelToggleButton;
