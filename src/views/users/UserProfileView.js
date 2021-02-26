import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import { useDispatch } from 'react-redux';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
  },
  productCard: {
    height: '100%',
    marginTop: '30px'
  }
}));
const UserProfileView = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Page
      className={classes.root}
      title="User Profile"
    >
      <Container maxWidth={false}>
        <Typography className={classes.productCard}>
          Private content of user
        </Typography>
      </Container>
    </Page>
  );
};

export default UserProfileView;
