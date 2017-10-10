import React, { Component } from 'react';
import { Form, Icon, Input, Button, Row, Card, Col, Checkbox } from 'antd';
import { connect } from 'react-redux'
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
      <Row type="flex" justify="center" align="middle" className="login-form__row">
        <Col xs={24} sm={16} md={12} className="login-form__col">
          <Card title="PIZZA BATTLE">
            <Form onSubmit={this.handleSubmit} className="login-form">
              <FormItem>
                {getFieldDecorator('userName', {
                  rules: [{ required: true, message: 'Please input your username!' }],
                })(
                  <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
                  )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                  <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
                  )}
              </FormItem>
              <FormItem>
                <div>
                  {getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true,
                  })(
                    <Checkbox>Remember me</Checkbox>
                    )}
                  <a className="login-form-forgot" href="">Forgot password</a>
                </div>
                <div>
                  <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                </Button>
                </div>
                <div>
                  Or <a href="">register now! {this.props.teste} </a>
                </div>
              </FormItem>
            </Form>
          </Card>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state) => ({
  teste: state.login.teste,
})

const LoginForm = Form.create()(Login);

export default connect(mapStateToProps, null)(LoginForm);
