import React from "react";
import { Form, Icon, Input, Button, Row, Typography } from "antd";
import { Link } from "react-router-dom";

const { Title, Text } = Typography;

class ContractNumberForm extends React.Component {
	handleSubmit = e => {
		e.preventDefault();

		this.props.form.validateFields((err, values) => {
			if (!err) {
				const { temp } = this.props;
				temp();
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
							{getFieldDecorator("contractNumber", {
								rules: [{ required: true, message: "Please input your contract number!" }]
							})(<Input size='large' placeholder='contractNumber' />)}
						</Form.Item>
					</Row>

					<Row>
						<Form.Item>
							<Row type='flex' justify='center' style={{ marginBottom: "10%" }}>
								<Button type='primary' size='large' htmlType='submit'>
									Continue
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

export default Form.create({ name: "forgotpassword" })(ContractNumberForm);
