import React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from 'antd';
import Login from '../login/Login';
import Signup from '../signup/Signup';
import './Main.scss'

const { Header, Footer, Content } = Layout;

const Main = () => (
  <div>
    <Route exact path="/" component={Login} />
    <Route exact path="/signup" component={Signup} />
    <Route path="/home" component={Home} />
  </div>
);

const Home = () => (
  <Layout>
    <Header>Header</Header>
    <Content>
      <h2>Home</h2>
    </Content>
    <Footer>Footer</Footer>
  </Layout>
)

export default Main;
