import React, { Component } from 'react';
import './App.css';
import Login from './modules/login/Login';
import { Provider } from 'react-redux'
import Store from './config/create-store'

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <Login /> 
      </Provider>
    );
  }
}

export default App;
