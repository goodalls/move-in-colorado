import React from 'react';
import { Route } from 'react-router-dom';

export const SIGN_UP = '/signup';
export const SIGN_IN = '/signin';
export const LANDING = '/';
export const HOME = '/home';
export const ACCOUNT = '/account';
export const PASSWORD_FORGET = '/pw-forget';

const Routes = () => {
  

  return (
    <div>
      <Route
        exact path='/'
        component={() => <LandingPage />}
      />
      <Route
        exact path='/signup'
        component={() => <SignUpPage />}
      />
      <Route
        exact path='/signin'
        component={() => <SignInPage />}
      />
      <Route
        exact path='/pw-forget'
        component={() => <PasswordForgetPage />}
      />
      <Route
        exact path='/home'
        component={() => <HomePage />}
      />
      <Route
        exact path='/account'
        component={() => <AccountPage />}
      />
    </div>
  );
};

export default Routes
