// @ts-nocheck
import { amber } from '@mui/material/colors';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { memo, useMemo, useRef, useState } from 'react';
import FuseSvgIcon from './FuseSvgIcon';



function FuseShortcuts(props) {
  const { navigation, shortcuts, onChange } = props;

  const searchInputRef = useRef(null);
  const [addMenu, setAddMenu] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState(null);
  const [iconPack, setIconPack] = useState([
    {
      id: 'apps.academy',
      title: 'Academy',
      type: 'item',
      icon: 'heroicons-outline:academic-cap',
      url: '/apps/academy',
      translate: 'ACADEMY',
    },
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
      id: 'apps.ecommerce',
      title: 'ECommerce',
      type: 'collapse',
      icon: 'heroicons-outline:shopping-cart',
      translate: 'ECOMMERCE',
      children: [
        {
          id: 'e-commerce-products',
          title: 'Products',
          type: 'item',
          url: 'apps/e-commerce/products',
          end: true,
        },
        {
          id: 'e-commerce-product-detail',
          title: 'Product Detail',
          type: 'item',
          url: 'apps/e-commerce/products/1/a-walk-amongst-friends-canvas-print',
        },
        {
          id: 'e-commerce-new-product',
          title: 'New Product',
          type: 'item',
          url: 'apps/e-commerce/products/new',
        },
        {
          id: 'e-commerce-orders',
          title: 'Orders',
          type: 'item',
          url: 'apps/e-commerce/orders',
          end: true,
        },
        {
          id: 'e-commerce-order-detail',
          title: 'Order Detail',
          type: 'item',
          url: 'apps/e-commerce/orders/1',
        },
      ],
    },
    {
      id: 'apps.file-manager',
      title: 'File Manager',
      type: 'item',
      icon: 'heroicons-outline:cloud',
      url: '/apps/file-manager',
      end: true,
      translate: 'FILE_MANAGER',
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
      id: 'apps.scrumboard',
      title: 'Scrumboard',
      type: 'item',
      icon: 'heroicons-outline:view-boards',
      url: '/apps/scrumboard',
      translate: 'SCRUMBOARD',
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
    {
      id: 'apps.profile',
      title: 'Profile',
      type: 'item',
      icon: 'heroicons-outline:user-circle',
      url: '/apps/profile',
    },
  ],)
  
  const shortcutItems = shortcuts
    ? shortcuts.map((id) => iconPack.find((item) => item.id === id))
    : [];

  function addMenuClick(event) {
    setAddMenu(event.currentTarget);
  }

  function addMenuClose() {
    setAddMenu(null);
  }

  function search(ev) {
    const newSearchText = ev.target.value;

    setSearchText(newSearchText);

    if (newSearchText.length !== 0 && navigation) {
      setSearchResults(
        navigation.filter((item) => item.title.toLowerCase().includes(newSearchText.toLowerCase()))
      );
      return;
    }
    setSearchResults(null);
  }

  function toggleInShortcuts(id) {
    let newShortcuts = [...shortcuts];
    newShortcuts = newShortcuts.includes(id)
      ? newShortcuts.filter((_id) => id !== _id)
      : [...newShortcuts, id];
    onChange(newShortcuts);
  }

  function ShortcutMenuItem({ item, onToggle }) {
    if (!item || !item.id) {
      return null;
    }

    return (
      <Link href={item.url || '/404'} role="button">
        <MenuItem key={item.id}>
          <ListItemIcon className="min-w-40">
            {item.icon ? (
              <FuseSvgIcon>{item.icon}</FuseSvgIcon>
            ) : (
              <span className="text-20 font-semibold uppercase text-center">{item.title[0]}</span>
            )}
          </ListItemIcon>
          <ListItemText primary={item.title} />
          <IconButton
            onClick={(ev) => {
              ev.preventDefault();
              ev.stopPropagation();
              onToggle(item.id);
            }}
            size="large"
          >
            <FuseSvgIcon color="action">
              {shortcuts.includes(item.id) ? 'heroicons-solid:star' : 'heroicons-outline:star'}
            </FuseSvgIcon>
          </IconButton>
        </MenuItem>
      </Link>
    );
  }

  return (
    <div
      className={clsx(
        'flex flex-1',
        props.variant === 'vertical' && 'flex-col grow-0 shrink',
        props.className
      )}
    >
      {useMemo(() => {
        const container = {
          show: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        };
        const item = {
          hidden: { opacity: 0, scale: 0.6 },
          show: { opacity: 1, scale: 1 },
        };
        return (
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className={clsx('flex flex-1', props.variant === 'vertical' && 'flex-col')}
          >
            {shortcutItems.map(
              (_item) =>
                _item && (
                  <Link href={_item.url} key={_item.id} role="button">
                    <Tooltip
                      title={_item.title}
                      placement={props.variant === 'horizontal' ? 'bottom' : 'left'}
                    >
                      <IconButton
                        className="w-40 h-40 p-0"
                        component={motion.div}
                        variants={item}
                        size="large"
                      >
                        {_item.icon ? (
                          <FuseSvgIcon>{_item.icon}</FuseSvgIcon>
                        ) : (
                          <span className="text-20 font-semibold uppercase">{_item.title[0]}</span>
                        )}
                      </IconButton>
                    </Tooltip>
                  </Link>
                )
            )}

            <Tooltip
              title="Click to add/remove shortcut"
              placement={props.variant === 'horizontal' ? 'bottom' : 'left'}
            >
              <IconButton
                component={motion.div}
                variants={item}
                className="w-40 h-40 p-0"
                aria-owns={addMenu ? 'add-menu' : null}
                aria-haspopup="true"
                onClick={addMenuClick}
                size="large"
              >
                <FuseSvgIcon sx={{ color: amber[600] }}>heroicons-solid:star</FuseSvgIcon>
              </IconButton>
            </Tooltip>
          </motion.div>
        );
      }, [addMenu, props.variant, shortcutItems])}

      <Menu
        id="add-menu"
        anchorEl={addMenu}
        open={Boolean(addMenu)}
        onClose={addMenuClose}
        classes={{
          paper: 'min-w-256',
        }}
        TransitionProps={{
          onEntered: () => {
            searchInputRef.current.focus();
          },
          onExited: () => {
            setSearchText('');
          },
        }}
      >
        <div className="p-16 pt-8">
          <Input
            inputRef={searchInputRef}
            value={searchText}
            onChange={search}
            placeholder="Search for an app or page"
            className=""
            fullWidth
            inputProps={{
              'aria-label': 'Search',
            }}
            disableUnderline
          />
        </div>

        <Divider />

        {searchText.length !== 0 &&
          searchResults &&
          searchResults.map((_item) => (
            <ShortcutMenuItem
              key={_item.id}
              item={_item}
              onToggle={() => toggleInShortcuts(_item.id)}
            />
          ))}

        {searchText.length !== 0 && searchResults.length === 0 && (
          <Typography color="text.secondary" className="p-16 pb-8">
            No results..
          </Typography>
        )}

        {searchText.length === 0 &&
          shortcutItems.map(
            (_item) =>
              _item && (
                <ShortcutMenuItem
                  key={_item.id}
                  item={_item}
                  onToggle={() => toggleInShortcuts(_item.id)}
                />
              )
          )}
      </Menu>
    </div>
  );
}

FuseShortcuts.propTypes = {};
FuseShortcuts.defaultProps = {
  variant: 'horizontal',
};

export default memo(FuseShortcuts);
