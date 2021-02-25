import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Container, Link, makeStyles, TextField, Typography } from '@material-ui/core';
import Page from 'src/components/Page';
import { useTranslation } from 'react-i18next';
import { userActions } from '../../_actions';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const LoginView = () => {
  const { t } = useTranslation('login');
  const [inputs, setInputs] = useState({
    username: '',
    password: ''
  });
  const dispatch = useDispatch();

  const ui = useSelector((state) => state.ui);
  const classes = useStyles();
  // const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: 'son@mailinator.com',
      password: '123456'
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
      password: Yup.string().max(255).required('Password is required')
    }),
    handleChange(e) {
      const { name, value } = e.target;
      setInputs((inputs) => ({ ...inputs, [name]: value }));
    },
    onSubmit: (values) => {
      console.log(values);
      dispatch(userActions.login(values.email, values.password));
      // navigate('/app/dashboard', { replace: true });
    },
  });

  return (
    <Page
      className={classes.root}
      title="Login"
    >
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="sm">
          <form onSubmit={formik.handleSubmit}>
            <Box mb={3}>
              <Typography
                color="textPrimary"
                variant="h2"
              >
                Sign in
              </Typography>
            </Box>
            <TextField
              error={Boolean(formik.touched.email && formik.errors.email)}
              fullWidth
              helperText={formik.touched.email && formik.errors.email}
              label="Email Address"
              margin="normal"
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="email"
              value={formik.values.email}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.password && formik.errors.password)}
              fullWidth
              helperText={formik.touched.password && formik.errors.password}
              label="Password"
              margin="normal"
              name="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="password"
              value={formik.values.password}
              variant="outlined"
            />
            <Box my={2}>
              <Button
                color="primary"
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Sign in now
              </Button>
            </Box>
            <Typography
              color="textSecondary"
              variant="body1"
            >
              Don&apos;t have an account?
              {' '}
              <Link
                component={RouterLink}
                to="/register"
                variant="h6"
              >
                Sign up
              </Link>
            </Typography>
          </form>
        </Container>
      </Box>
    </Page>
  );
};

export default LoginView;
