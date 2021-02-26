import React, { useEffect, useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Avatar, Box, Divider, Drawer, Hidden, List, makeStyles, TextField, Typography } from '@material-ui/core';
import { List as UniIcon, Lock as LockIcon, UserPlus as UserPlusIcon, User as UserIcon } from 'react-feather';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import NavItem from './NavItem';
import { userActions } from '../../../redux/user/user.actions';

const getUserName = () => {
  const userString = localStorage.getItem('user');
  const loggedUser = userString ? JSON.parse(userString) : null;
  return !loggedUser ? 'Unknown User' : `${loggedUser.firstName} ${loggedUser.lastName}`;
};

const defaultUser = {
  avatar: '/static/images/avatars/default-avatar.png',
  jobTitle: 'Senior Developer',
  name: getUserName()
};

const items = [
  {
    href: '/universities',
    icon: UniIcon,
    title: 'nav.universities'
  },
  {
    href: '/user-profile',
    icon: UserIcon,
    title: 'nav.userProfile'
  },
  {
    href: '/login',
    icon: LockIcon,
    title: 'nav.login'
  },
  {
    href: '/register',
    icon: UserPlusIcon,
    title: 'nav.register'
  }
];

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)'
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64
  },
  typography: {
    fontSize: 12,
  }
}));

const NavBar = ({ onMobileClose, openMobile }) => {
  const { t } = useTranslation();
  const classes = useStyles();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [user, setUser] = useState(defaultUser);
  const dispatch = useDispatch();
  function subscribeSubmit() {
    dispatch(userActions.subscribe(email));
  }
  function handleChangeEmail(event) {
    setEmail(event.target.value);
  }
  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname, onMobileClose, openMobile]);

  const content = (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        p={2}
      >
        <Avatar
          className={classes.avatar}
          component={RouterLink}
          src={user.avatar}
          to="/"
        />
        <Typography
          className={classes.name}
          color="textPrimary"
          variant="h5"
        >
          {getUserName()}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
        >
          {user.jobTitle}
        </Typography>
      </Box>
      <Divider />
      <Box p={2}>
        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={t(item.title)}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
      <Box p={2}>
        <TextField
          onKeyPress={(ev) => {
            if (ev.key === 'Enter') {
              subscribeSubmit();
              ev.preventDefault();
            }
          }}
          value={email || ''}
          onChange={handleChangeEmail}
          fullWidth
          placeholder={t('nav.email')}
          variant="outlined"
        />
      </Box>
      <Box p={2} marginTop={-3}>
        <Button
          onClick={subscribeSubmit}
          fullWidth
          variant="contained"
          color="secondary"
        >
          {t('nav.subscribe')}
        </Button>
      </Box>
      <Box flexGrow={1} />
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

NavBar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false
};

export default NavBar;
