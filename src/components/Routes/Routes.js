import React from 'react';
import { Route } from 'react-router-dom';
import Login from '../Login/Login';

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

export default Routes;
