import React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from 'antd';
import Login from '../login/Login';

const Main = () => (
  <Layout
    style={{
      background: '#f8f8f8',
      position: 'absolute',
      overflow: 'hidden',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    }}
  >
    <Route exact path="/" component={Login} />
    <Route path="/home" component={Home} />
  </Layout>
);

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

export default Main;