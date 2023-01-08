import FuseNavigation from './FuseNavigationLayer';
import clsx from 'clsx';
import { memo, useMemo, useState } from 'react';
import FuseNavigationLayer from './FuseNavigationLayer';
import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectNavigation } from 'app/store/fuse/navigationSlice';
// import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
// import { navbarCloseMobile } from 'app/store/fuse/navbarSlice';

function Navigation(props) {
  // const navigation = useSelector(selectNavigation);
  // const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));

  // const dispatch = useDispatch();
  const [authRoles, setAuthRoles] = useState({
    admin: ['admin'],
    staff: ['admin', 'staff'],
    user: ['admin', 'staff', 'user'],
    onlyGuest: [],
  })
  const [navigation, setNavigation] = useState([
 
    {
      id: 'apps',
      title: 'Applications',
      subtitle: 'Custom made application designs',
      type: 'group',
      icon: 'heroicons-outline:cube',
      translate: 'APPLICATIONS',
      children: [
        
        {
          id: 'apps.calendar',
          title: 'Calendar',
          subtitle: '3 upcoming events',
          type: 'item',
          icon: 'heroicons-outline:calendar',
          url: '/apps/calendar',
          translate: 'CALENDAR',
        },
        {
          id: 'apps.chat',
          title: 'Chat',
          type: 'item',
          icon: 'heroicons-outline:chat-alt',
          url: '/apps/chat',
          translate: 'CHAT',
        },
        {
          id: 'apps.contacts',
          title: 'Contacts',
          type: 'item',
          icon: 'heroicons-outline:user-group',
          url: '/apps/contacts',
          translate: 'CONTACTS',
        },
       
       
        {
          id: 'apps.help-center',
          title: 'Help Center',
          type: 'collapse',
          icon: 'heroicons-outline:support',
          url: '/apps/help-center',
          children: [
            {
              id: 'apps.help-center.home',
              title: 'Home',
              type: 'item',
              url: '/apps/help-center',
              end: true,
            },
            {
              id: 'apps.help-center.faqs',
              title: 'FAQs',
              type: 'item',
              url: '/apps/help-center/faqs',
            },
            {
              id: 'apps.help-center.guides',
              title: 'Guides',
              type: 'item',
              url: '/apps/help-center/guides',
            },
            {
              id: 'apps.help-center.support',
              title: 'Support',
              type: 'item',
              url: '/apps/help-center/support',
            },
          ],
        },
        {
          id: 'apps.mailbox',
          title: 'Mailbox',
          type: 'item',
          icon: 'heroicons-outline:mail',
          url: '/apps/mailbox',
          translate: 'MAIL',
          badge: {
            title: '27',
            classes: 'px-8 bg-pink-600 text-white rounded-full',
          },
        },
        {
          id: 'apps.notes',
          title: 'Notes',
          type: 'item',
          icon: 'heroicons-outline:pencil-alt',
          url: '/apps/notes',
          translate: 'NOTES',
        },
        
        {
          id: 'apps.tasks',
          title: 'Tasks',
          subtitle: '12 remaining tasks',
          type: 'item',
          icon: 'heroicons-outline:check-circle',
          url: '/apps/tasks',
          translate: 'TASKS',
        },
       
      ],
    },
    
   
  
    {
      id: 'auth',
      title: 'Auth',
      type: 'group',
      icon: 'verified_user',
      children: [
        {
          id: 'sign-in',
          title: 'Sign in',
          type: 'item',
          url: 'sign-in',
          auth: authRoles.onlyGuest,
          icon: 'lock',
        },
        {
          id: 'register',
          title: 'Register',
          type: 'item',
          url: 'register',
          auth: authRoles.onlyGuest,
          icon: 'person_add',
        },
        {
          id: 'sign-out',
          title: 'Sign out',
          type: 'item',
          auth: authRoles.user,
          url: 'sign-out',
          icon: 'exit_to_app',
        },
        {
          id: 'auth-admin-example',
          title: 'Admin: Auth protected page',
          type: 'item',
          url: 'auth/admin-role-example',
          icon: 'security',
        },
        {
          id: 'only-admin-navigation-item',
          title: 'Nav item only for Admin',
          type: 'item',
          auth: authRoles.admin,
          url: 'auth/admin-role-example',
          icon: 'verified_user',
        },
        {
          id: 'auth-staff-example',
          title: 'Staff: Auth protected page',
          type: 'item',
          url: 'auth/staff-role-example',
          icon: 'security',
        },
        {
          id: 'only-staff-navigation-item',
          title: 'Nav item only for Staff',
          type: 'item',
          auth: authRoles.staff,
          url: 'auth/staff-role-example',
          icon: 'verified_user',
        },
        {
          id: 'auth-guest-example',
          title: 'Guest: Auth protected page',
          type: 'item',
          url: 'auth/guest-role-example',
          icon: 'security',
        },
        {
          id: 'only-guest-navigation-item',
          title: 'Nav item only for Guest',
          type: 'item',
          auth: authRoles.onlyGuest,
          url: 'auth/guest-role-example',
          icon: 'verified_user',
        },
      ],
    },
    
    
  ])

  return useMemo(() => {
    function handleItemClick(item) {
      // if (isMobile) {
      //   dispatch(navbarCloseMobile());
      // }
    }

    return (
      <FuseNavigation
        className={clsx('navigation', props.className)}
        navigation={navigation}
        layout={props.layout}
        dense={props.dense}
        active={props.active}
        onItemClick={handleItemClick}
      />
    );
  }, [navigation,authRoles,  props.active, props.className, props.dense, props.layout]);
}

Navigation.defaultProps = {
  layout: 'vertical',
};

export default memo(Navigation);
