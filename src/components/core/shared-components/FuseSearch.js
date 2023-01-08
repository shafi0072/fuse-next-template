import ClickAwayListener from '@mui/material/ClickAwayListener';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import clsx from 'clsx';
import _ from '../../../utils/lodash';
import { memo, useEffect, useReducer, useRef } from 'react';
import Autosuggest from 'react-autosuggest';

const Root = styled('div')(({ theme }) => ({
  '& .FuseSearch-container': {
    position: 'relative',
  },

  '& .FuseSearch-suggestionsContainerOpen': {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing(),
    left: 0,
    right: 0,
  },

  '& .FuseSearch-suggestion': {
    display: 'block',
  },

  '& .FuseSearch-suggestionsList': {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },

  '& .FuseSearch-input': {
    transition: theme.transitions.create(['background-color'], {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.short,
    }),
    '&:focus': {
      backgroundColor: theme.palette.background.paper,
    },
  },
}));