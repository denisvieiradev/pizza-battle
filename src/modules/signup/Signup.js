import React, { Component } from 'react';
import { Form, Icon, Input, Button,Row, Card, Col, Checkbox } from 'antd';
import { connect } from 'react-redux'
const FormItem = Form.Item;

class Signup extends Component {
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
        <Row type="flex" justify="center" align="middle">
          <Col span={6}>
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
                  {getFieldDecorator('confirmPassword', {
                    rules: [{ required: true, message: 'Please confirm your Password!' }],
                  })(
                    <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Confirm Password" />
                  )}
                </FormItem>
                <FormItem>


                  <Button type="primary" htmlType="submit" className="login-form-button">
                    Sign Up
                  </Button>
                  <div className="footer-social-icons">
                      Login social
                      <ul className="social-icons">
                          <li><a href="" className="social-icon"> <i className="fa fa-facebook"></i></a></li>
                          <li><a href="" className="social-icon"> <i className="fa fa-twitter"></i></a></li>

                      </ul>
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

const SignupForm = Form.create()(Signup);

export default connect(mapStateToProps, null)(SignupForm);
