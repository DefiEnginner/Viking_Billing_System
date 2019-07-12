import React, { Component } from "react";
import { Form, Icon, Input, Button, Checkbox, Row, Col, Typography } from "antd";
import { Link } from "react-router-dom";

const { Title, Text } = Typography;

class ForgotPasswordForm extends React.Component {
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
					<Row type='flex' justify='center' align='middle' style={{ marginBottom: "10%" }}>
						<img src='images/logo_viking_dark.svg' alt='logo' />
					</Row>
					<Row type='flex' justify='center' align='middle' style={{ marginBottom: "0%" }}>
						<Title level={3} strong={true}>
							<Text>Forgottten Password ?</Text>
						</Title>
					</Row>

					<Row type='flex' justify='center' align='middle' style={{ marginBottom: "10%" }}>
						<Text>Enter your email to reset your password:</Text>
					</Row>
					<Row>
						<Form.Item>
							{getFieldDecorator("email", {
								rules: [{ required: true, message: "Please input your email!" }]
							})(
								<Input
									size='large'
									prefix={<Icon type='user' style={{ color: "rgba(0,0,0,.25)" }} />}
									placeholder='Email'
								/>
							)}
						</Form.Item>
					</Row>

					<Row>
						<Form.Item>
							<Row type='flex' justify='center' style={{ marginBottom: "10%" }}>
								<Link to='/signin' style={{ marginLeft: "5%", fontWeight: "bold" }}>
									<Button type='primary' size='large'>
										Request
									</Button>
								</Link>

								<Link to='/signin' style={{ marginLeft: "5%", fontWeight: "bold" }}>
									<Button size='large'>Cancel</Button>
								</Link>
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

export default Form.create({ name: "forgotpassword" })(ForgotPasswordForm);
