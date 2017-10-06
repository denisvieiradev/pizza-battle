// import React, { Component } from 'react';
// import './App.css';
// import Login from './modules/login/Login';
// import { Provider } from 'react-redux'
// import Store from './config/create-store'

// class App extends Component {
//   render() {
//     return (
//       <Provider store={Store}>
//         <Login />
//       </Provider>
//     );
//   }
// }

// export default App;



import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './modules/main/Main';

const Application = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <Route pattern="/" component={Main} />
    </BrowserRouter>
  </Provider>
);

Application.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Application;
