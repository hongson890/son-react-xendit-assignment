import 'react-perfect-scrollbar/dist/css/styles.css';
import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import theme from 'src/theme';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import { history } from './helpers';
import LoginView from './views/auth/LoginView';
import { RouteWrapper } from './components/RouteWrapper';
import MainLayout from './layouts/MainLayout';
import DashboardLayout from './layouts/DashboardLayout';
import GlobalStyles from './components/GlobalStyles';
import RegisterView from './views/auth/RegisterView';
import UniversityListView from './views/university/UniversityListView';
import SnackbarPopup from './components/SnackbarPopup';
import NotFoundView from './views/errors/NotFoundView';
import { PrivateRouteWrapper } from './components/PrivateRouteWrapper';
import UserProfileView from './views/users/UserProfileView';

class App extends React.Component {
  constructor(props) {
    super(props);

    history.listen((location, action) => {
    });
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <SnackbarPopup />
        <Router history={history}>
          <Switch>
            <PrivateRouteWrapper path="/user-profile" component={UserProfileView} layout={DashboardLayout} />
            <RouteWrapper exact path="/" component={UniversityListView} layout={DashboardLayout} />
            <RouteWrapper path="/universities" component={UniversityListView} layout={DashboardLayout} />
            <RouteWrapper path="/login" component={LoginView} layout={MainLayout} />
            <RouteWrapper path="/register" component={RegisterView} layout={MainLayout} />
            <Route component={NotFoundView} />
          </Switch>
        </Router>
      </ThemeProvider>
    );
  }
}

function mapState(state) {
  const { alert } = state;
  return { alert };
}

const actionCreators = {
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };
