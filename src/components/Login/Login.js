import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Login extends Component {

  switch() {
    const {match} = this.props;
    switch (match) {
      case '/':
        return <h1>'/'</h1>;
      case '/signup':
        return <h1>signup</h1>;
      case '/signin':
        return <h1>signin</h1>;
      case '/pw-forget':
        return <h1>pw-forget</h1>;
      case '/home':
        return <h1>home</h1>;
      case '/account':
        return <h1>account</h1>;
      default:
        return <h1>default</h1>;
    }
  }

  render() {
    return (
      <div>
        { this.switch() }
      </div>
    );
  }
}

export default Login;
