// @ts-nocheck
import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import FuseShortcuts from '../fuse/core/FuseShortcuts';
// import { selectFlatNavigation } from 'app/store/fuse/navigationSlice';
// import { selectUserShortcuts, updateUserShortcuts } from 'app/store/userSlice';

function NavigationShortcuts(props) {
  const { variant, className } = props;
  // const dispatch = useDispatch();
  // const shortcuts = useSelector(selectUserShortcuts) || [];
  // const navigation = useSelector(selectFlatNavigation);

  function handleShortcutsChange(newShortcuts) {
    // dispatch(updateUserShortcuts(newShortcuts));
  }
  const shortcuts = ['apps.calendar', 'apps.mailbox', 'apps.contacts', 'apps.tasks']

  return (
    <FuseShortcuts
      className={className}
      variant={variant}
      // navigation={navigation}
      shortcuts={shortcuts}
      onChange={handleShortcutsChange}
    />
  );
}

export default NavigationShortcuts;
