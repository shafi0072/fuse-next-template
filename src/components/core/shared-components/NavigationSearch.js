// import { useSelector } from 'react-redux';
// import FuseSearch from '@fuse/core/FuseSearch';
// import { selectFlatNavigation } from 'app/store/fuse/navigationSlice';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import React from 'react';
function NavigationSearch(props) {
  const { variant, className } = props;
  // const navigation = useSelector(selectFlatNavigation);

  return <SearchOutlinedIcon sx={{fontSize:35}} color="action"/>;
}

export default NavigationSearch;