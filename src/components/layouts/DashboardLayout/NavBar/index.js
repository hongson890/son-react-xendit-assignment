import React, { useEffect, useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Avatar, Box, Divider, Drawer, Hidden, List, makeStyles, TextField, Typography } from '@material-ui/core';
import { List as BarChartIcon, Lock as LockIcon, UserPlus as UserPlusIcon } from 'react-feather';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import NavItem from './NavItem';
import { userActions } from '../../../../redux/user/user.actions';

const user = {
  avatar: '/static/images/avatars/default-avatar.png',
  jobTitle: 'Senior Developer',
  name: 'Son Pham'
};

const items = [
  {
    href: '/universities',
    icon: BarChartIcon,
    title: 'Universities'
  },
  {
    href: '/login',
    icon: LockIcon,
    title: 'Login'
  },
  {
    href: '/register',
    icon: UserPlusIcon,
    title: 'Register'
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
  const classes = useStyles();
  const location = useLocation();
  const [email, setEmail] = useState('');
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
          {user.name}
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
              title={item.title}
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
          placeholder="Email Adress"
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
          Subscribe
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
