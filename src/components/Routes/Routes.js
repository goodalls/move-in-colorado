import React from 'react';
import { Route } from 'react-router-dom';
import Login from '../Login/Login';
import PropTypes from 'prop-types';

const Routes = () => {
  return (
    <div>
      <Route
        exact path='/'
        render={(props) => <Login match={props.match.url} />}
      />
      <Route
        exact path='/signup'
        render={(props) => <Login match={props.match.url} />}
      />
      <Route
        exact path='/signin'
        render={(props) => <Login match={props.match.url} />}
      />
      <Route
        exact path='/pw-forget'
        render={(props) => <Login match={props.match.url} />}
      />
      <Route
        exact path='/home'
        render={(props) => <Login match={props.match.url} />}
      />
      <Route
        exact path='/account'
        render={(props) => <Login match={props.match.url} />}
      />
    </div>
  );
};

Routes.propTypes = {
  match: PropTypes.string
};

export default Routes;
