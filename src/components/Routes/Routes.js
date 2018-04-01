import React from 'react';
import { Route } from 'react-router-dom';
import Login from '../Login/Login';

const Routes = () => {
  

  return (
    <div>
      <Route
        exact path='/'
        component={() => <Login />}
      />
      <Route
        exact path='/signup'
        component={() => <Login />}
      />
      <Route
        exact path='/signin'
        component={() => <Login />}
      />
      <Route
        exact path='/pw-forget'
        component={() => <Login />}
      />
      <Route
        exact path='/home'
        component={() => <Login />}
      />
      <Route
        exact path='/account'
        component={() => <Login />}
      />
    </div>
  );
};

export default Routes;
