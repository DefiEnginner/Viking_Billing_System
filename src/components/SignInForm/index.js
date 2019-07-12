import React, { Component } from "react";
import { Form, Icon, Input, Button, Checkbox, Row, Col } from "antd";
import { Link } from "react-router-dom";

import "./index.css";

class SignInForm extends React.Component {
	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log("Received values of form: ", values);
			}
		});
	};

	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<Form onSubmit={this.handleSubmit} className='login-form'>
				<Row>
					<Row type='flex' justify='center' align='middle' style={{ marginBottom: "20%" }}>
						<img src='images/logo_viking_dark.svg' alt='logo' />
					</Row>

					<Row>
						<Form.Item>
							{getFieldDecorator("username", {
								rules: [{ required: true, message: "Please input your username!" }]
							})(
								<Input
									size='large'
									prefix={<Icon type='user' style={{ color: "rgba(0,0,0,.25)" }} />}
									placeholder='Username'
								/>
							)}
						</Form.Item>
					</Row>

					<Row>
						<Form.Item>
							{getFieldDecorator("password", {
								rules: [{ required: true, message: "Please input your Password!" }]
							})(
								<Input
									size='large'
									prefix={<Icon type='lock' style={{ color: "rgba(0,0,0,.25)" }} />}
									type='password'
									placeholder='Password'
								/>
							)}
						</Form.Item>
					</Row>

					<Row>
						<Form.Item>
							<Row type='flex' justify='space-between' style={{ marginBottom: "10%" }}>
								<Col>
									{getFieldDecorator("remember", {
										valuePropName: "checked",
										initialValue: true
									})(<Checkbox>Remember me</Checkbox>)}
								</Col>
								<Col>
									<Link to='/forgot-password'>Forgot password?</Link>
								</Col>
							</Row>
							<Row type='flex' justify='center' align='middle' style={{ marginBottom: "5%" }}>
								<Button size='large' type='primary' htmlType='submit' className='login-form-button'>
									Sign In
								</Button>
							</Row>
							<Row type='flex' justify='center' align='middle'>
								Don't have an account yet?
								<Link to='/signup' style={{ marginLeft: "5%", fontWeight: "bold" }}>
									Sign Up!
								</Link>
							</Row>
						</Form.Item>
					</Row>
				</Row>
			</Form>
		);
	}
}

export default Form.create({ name: "signin" })(SignInForm);
