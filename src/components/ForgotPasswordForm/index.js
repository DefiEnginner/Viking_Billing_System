import React from "react";
import { Form, Icon, Input, Button, Row, Typography } from "antd";
import { Link } from "react-router-dom";

const { Title, Text } = Typography;

class ForgotPasswordForm extends React.Component {
	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log("Received values of form: ", values);
			} else {
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
						<img src='images/logo.svg' alt='logo' />
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
								rules: [{ type: "email", required: true, message: "Please input your email!" }]
							})(<Input size='large' placeholder='Email' />)}
						</Form.Item>
					</Row>

					<Row>
						<Form.Item>
							<Row type='flex' justify='center' style={{ marginBottom: "10%" }}>
								<Link to='/signin' style={{ marginLeft: "5%", fontWeight: "bold" }}>
									<Button type='primary' size='large' htmlType='submit'>
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
