import { useSelector } from 'react-redux';
// import FuseScrollbars from '@fuse/core/FuseScrollbars';
import { ThemeProvider, useTheme } from '@mui/material/styles';
// import { selectContrastMainTheme } from 'app/store/fuse/settingsSlice';
import clsx from 'clsx';
import React from 'react';

function FusePageSimpleSidebarContent(props) {
  // const theme = useTheme();
  // const contrastTheme = useSelector(selectContrastMainTheme(theme.palette.primary.main));

  return (
    <>
      {props.header && (
        <>
          <div className={clsx('FusePageSimple-sidebarHeader', props.variant)}>{props.header}</div>
        </>
      )}

      {props.content && <div className="FusePageSimple-sidebarContent">{props.content}</div>}
    </>
  );
}

export default FusePageSimpleSidebarContent;
