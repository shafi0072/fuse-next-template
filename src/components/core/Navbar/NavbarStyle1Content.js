import React from 'react';
import { styled } from '@mui/material/styles';
import clsx from 'clsx';
import Logo from '../../../lib/logo';
import NavbarToggleButton from '../shared-components/NavbarToggleButton';
import Navigation from '../shared-components/Navigation';
const Root = styled('div')(({ theme }) => ({
  backgroundColor: 'rgb(17, 24, 39)',
  color: 'rgb(255, 255, 255)',
  '& ::-webkit-scrollbar-thumb': {
    boxShadow: `inset 0 0 0 20px ${
      theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.24)' : 'rgba(255, 255, 255, 0.24)'
    }`,
  },
  '& ::-webkit-scrollbar-thumb:active': {
    boxShadow: `inset 0 0 0 20px ${
      theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.37)' : 'rgba(255, 255, 255, 0.37)'
    }`,
  },
}));

const StyledContent = styled('div')(({ theme }) => ({
  overscrollBehavior: 'contain',
  overflowX: 'hidden',
  overflowY: 'auto',
  WebkitOverflowScrolling: 'touch',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100% 40px, 100% 10px',
  backgroundAttachment: 'local, scroll',
}));


const NavbarStyle1Content = (props) => {
  return (
    <Root className={clsx('flex flex-auto flex-col overflow-hidden h-full', props.className)}>
    <div className="flex flex-row items-center shrink-0 h-48 md:h-76 px-12">
      <div className="flex flex-1 mx-4">
        <Logo />
      </div>

      <NavbarToggleButton className="w-40 h-40 p-0" />
    </div>

    <StyledContent option={{ suppressScrollX: true, wheelPropagation: false }}>
      <Navigation layout="vertical" />
    </StyledContent>
  </Root>
  );
};

export default NavbarStyle1Content;