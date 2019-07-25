import React from "react";
import { Form, Icon, Input, Button, Row, Col, Typography, Checkbox } from "antd";
import { Link } from "react-router-dom";

const { Title, Text } = Typography;

const FormField = (getFieldDecorator, valuename, message, placeholder) => (
	<Row>
		<Form.Item>
			{getFieldDecorator("email", {
				rules: [{ type: "email", required: true, message: "Please input your Email address!" }]
			})(<Input size='large' placeholder='Email Address' />)}
		</Form.Item>
	</Row>
);

class SignUpForm extends React.Component {
	confirmPassword = (rule, value, cb) => {
		const { form } = this.props;
		if (value && value !== form.getFieldValue("password")) {
			cb("Two passwords that you enter is inconsistent!");
		} else {
			cb();
		}
	};
	confirmTerms = (rule, value, cb) => {
		if (value) {
			cb();
		} else {
			cb("This field is required");
		}
	};
	isNumber = (rule, value, cb) => {
		if (isNaN(value)) {
			cb("This field should be number");
		} else {
			cb();
		}
	};
	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log("Received values of form: ", values);
				this.props.handleSubmit(values);
			}
		});
	};

	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<Form onSubmit={this.handleSubmit} className='login-form'>
				<Row>
					<Row type='flex' justify='center' align='middle' style={{ marginBottom: "10%" }}>
						<img src='images/logo.svg' alt='logo' style={{ height: "150px" }} />
					</Row>

					<Row type='flex' justify='center' align='middle'>
						<Title level={4}>
							<Text>Sign Up</Text>
						</Title>
					</Row>

					<Row type='flex' justify='center' align='middle' style={{ marginBottom: "10%" }}>
						<Text>Enter your details to create your account: </Text>
					</Row>

					<Row>
						<Form.Item>
							{getFieldDecorator("email", {
								rules: [{ type: "email", required: true, message: "Please input your Email address!" }]
							})(<Input size='large' placeholder='Email Address' />)}
						</Form.Item>
					</Row>

					<Row>
						<Form.Item>
							{getFieldDecorator("companyName", {
								rules: [{ required: true, message: "Please input your company name!" }]
							})(<Input size='large' placeholder='Company Name' />)}
						</Form.Item>
					</Row>

					<Row>
						<Form.Item>
							{getFieldDecorator("phoneNumber", {
								rules: [
									{ required: true, message: "Please input your phone number!" },
									{ validator: this.isNumber }
								]
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
								rules: [
									{ required: true, message: "Please input your password!" },
									{ validator: this.confirmPassword }
								]
							})(<Input size='large' type='password' placeholder='Confirm Password' />)}
						</Form.Item>
					</Row>

					<Row>
						<Row style={{ marginBottom: "10px" }}>
							<Text>Address</Text>
						</Row>
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
									rules: [
										{ required: true, message: "Please input your postcode!" },
										{ validator: this.isNumber }
									]
								})(<Input size='large' placeholder='Postcode/ZIP' />)}
							</Form.Item>
						</Col>
					</Row>

					<Row>
						<Form.Item>
							<Row type='flex'>
								<Col>
									{getFieldDecorator("remember", {
										valuePropName: "checked",
										initialValue: false,
										rules: [{ validator: this.confirmTerms }]
									})(<Checkbox>I agree with the</Checkbox>)}
								</Col>
								<Link to='/signin' style={{ fontWeight: "bold" }}>
									<Text style={{ fontWeight: "bold" }}>terms and conditions</Text>
								</Link>
							</Row>
						</Form.Item>
						<Form.Item>
							<Row type='flex' justify='center' style={{ marginBottom: "10%", marginTop: "10%" }}>
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
