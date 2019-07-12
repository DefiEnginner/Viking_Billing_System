import React from "react";
import { Form, Icon, Input, Button, Row, Col, Typography, Checkbox } from "antd";
import { Link } from "react-router-dom";

const { Title, Text } = Typography;

class SignUpForm extends React.Component {
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
		const { temp } = this.props;
		return (
			<Form onSubmit={this.handleSubmit} className='login-form'>
				<Row>
					<Row type='flex' justify='center' align='middle' style={{ marginBottom: "10%" }}>
						<img src='images/logo_viking_dark.svg' alt='logo' />
					</Row>

					<Row type='flex' justify='center' align='middle'>
						<Title level={2}>
							<Text>Sign Up</Text>
						</Title>
					</Row>

					<Row type='flex' justify='center' align='middle'>
						<Text>Enter your contract number to continue</Text>
					</Row>
					<Row type='flex' justify='center' align='middle' style={{ marginBottom: "10%" }}>
						<Text>create your account:</Text>
					</Row>

					<Row>
						<Form.Item>
							{getFieldDecorator("email", {
								rules: [{ required: true, message: "Please input your Email address!" }]
							})(<Input size='large' placeholder='Email Address' />)}
						</Form.Item>
					</Row>

					<Row>
						<Form.Item>
							{getFieldDecorator("phoneNumber", {
								rules: [{ required: true, message: "Please input your phone number!" }]
							})(<Input size='large' placeholder='Phone number' />)}
						</Form.Item>
					</Row>

					<Row>
						<Form.Item>
							{getFieldDecorator("password", {
								rules: [{ required: true, message: "Please input your password!" }]
							})(<Input size='large' type='password' placeholder='Password' />)}
						</Form.Item>
					</Row>

					<Row>
						<Form.Item>
							{getFieldDecorator("confirmPasword", {
								rules: [{ required: true, message: "Please input your password!" }]
							})(<Input size='large' type='password' placeholder='Confirm Password' />)}
						</Form.Item>
					</Row>

					<Row>
						<a>Address</a>
						<Form.Item>
							{getFieldDecorator("address", {
								rules: [{ required: true, message: "Please input your address!" }]
							})(<Input size='large' placeholder='Address' />)}
						</Form.Item>
					</Row>

					<Row>
						<Form.Item>
							{getFieldDecorator("country", {
								rules: [{ required: true, message: "Please input your phone country!" }]
							})(<Input size='large' placeholder='Country' />)}
						</Form.Item>
					</Row>

					<Row>
						<Form.Item>
							{getFieldDecorator("city", {
								rules: [{ required: true, message: "Please input your city!" }]
							})(<Input size='large' placeholder='City' />)}
						</Form.Item>
					</Row>

					<Row type='flex' justify='space-between'>
						<Col span={14}>
							<Form.Item>
								{getFieldDecorator("state", {
									rules: [{ required: true, message: "Please input your state!" }]
								})(<Input size='large' placeholder='State' />)}
							</Form.Item>
						</Col>
						<Col offset={2} span={8}>
							<Form.Item>
								{getFieldDecorator("postcode", {
									rules: [{ required: true, message: "Please input your postcode!" }]
								})(<Input size='large' placeholder='Postcode/ZIP' />)}
							</Form.Item>
						</Col>
					</Row>

					<Row>
						<Form.Item>
							<Row type='flex' style={{ marginBottom: "10%" }}>
								<Col>
									{getFieldDecorator("remember", {
										valuePropName: "checked",
										initialValue: true
									})(<Checkbox>I agree with the</Checkbox>)}
								</Col>
								<a style={{ fontWeight: "bold" }}>terms and conditions</a>
							</Row>
							<Row type='flex' justify='center' style={{ marginBottom: "10%" }}>
								<Button type='primary' size='large' htmlType='submit'>
									Sign Up
								</Button>

								<Link to='/signin' style={{ marginLeft: "5%", fontWeight: "bold" }}>
									<Button size='large'>Cancel</Button>
								</Link>
							</Row>
						</Form.Item>
					</Row>
				</Row>
			</Form>
		);
	}
}

export default Form.create({ name: "signup" })(SignUpForm);
