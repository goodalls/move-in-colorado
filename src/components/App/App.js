import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import {MapContainer} from '../MapContainer/MapContainer';
import Routes from '../Routes/Routes';
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <li><Link to='/signin'>Sign In</Link></li>
          <li><Link to='/'>Landing</Link></li>
          <li><Link to='/home'>Home</Link></li>
          <li><Link to='/account'>Account</Link></li>
        </ul>
        <Routes />
        {/* <MapContainer /> */}
      </div>
    );
  }
}

export default App;
