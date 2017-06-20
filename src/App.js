import React, { Component } from 'react';
import { Button, Card, Row, Col } from 'antd';
import './App.css';

class App extends Component {
  render() {
    return (
        <Row type="flex" justify="center" align="middle">
          <Col span={6}>
            <Card title="PIZZA BATTLE">
              <Button type="primary">Button</Button>
            </Card>
          </Col>
          <Col span={6}>
            <Card title="PIZZA BATTLE">
              <Button type="primary">Button</Button>
            </Card>
          </Col>
          <Col span={6}>
            <Card title="PIZZA BATTLE">
              <Button type="primary">Button</Button>
            </Card>
          </Col>
          <Col span={6}>
            <Card title="PIZZA BATTLE">
              <Button type="primary">Button</Button>
            </Card>
          </Col>
        </Row>
    );
  }
}

export default App;
