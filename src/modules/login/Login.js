import React, { Component } from 'react';
import { Form, Icon, Input, Button,Row, Card, Col, Checkbox } from 'antd';
import { connect } from 'react-redux';
import './Login.css';

const FormItem = Form.Item;

class Login extends Component {
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Row className="login-wrapper">
        <Col className="form-holder">

          <div className="logo-holder">
            <span className="logo -pizza"></span>
          </div>

          <Card title="Pizza Battle">

            <Form onSubmit={this.handleSubmit}>
              <FormItem>
                {
                  getFieldDecorator('userName', {
                    rules: [{
                      required: true,
                      message: 'Please input your username!'
                    }],
                  })(<Input prefix={<Icon type="user" />} placeholder="Username" />)
                }
              </FormItem>

              <FormItem>
                {
                  getFieldDecorator('password', {
                    rules: [{
                      required: true,
                      message: 'Please input your password!'
                    }],
                  })(<Input prefix={<Icon type="lock" />} type="password" placeholder="Password" />)
                }
              </FormItem>

              <FormItem>
                {
                  getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true,

    );
  }
}

const mapStateToProps = (state) => ({
  teste: state.login.teste,
})

const LoginForm = Form.create()(Login);

export default connect(mapStateToProps, null)(LoginForm);
