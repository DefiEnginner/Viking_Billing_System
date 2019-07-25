import React from "react";
import { Form, Icon, Input, Button, Row, Col, Typography, Upload, Divider, InputNumber } from "antd";

import "./index.scss";

const { Text } = Typography;
const { TextArea } = Input;
class NewProductForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			imageUrl: "",
			loading: false
		};
	}
	cancelSubmit = () => {
		this.props.cancelAdd();
	};
	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				this.props.handleSubmit({ ...values, imageUrl: this.state.imageUrl });
			} else {
			}
		});
	};

	handleChange = info => {
		console.log(info);
		if (info.file.status === "uploading") {
			this.setState({ loading: true });
			return;
		} else {
			const imageUrl = URL.createObjectURL(info.file.originFileObj);
			console.log(imageUrl);
			this.setState({
				imageUrl,
				loading: false
			});
		}
	};

	isNumber = (rule, value, cb) => {
		if (isNaN(value)) {
			cb("This field should be number");
		} else {
			cb();
		}
	};

	render() {
		const { getFieldDecorator } = this.props.form;
		const { imageUrl } = this.state;

		const productImage = (
			<div className='productimageholder'>
				<div className='centered'>
					<Icon type={this.state.loading ? "loading" : "plus"} />
					<Text style={{ marginLeft: "5px" }}>
						{this.state.loading ? "Uploading ..." : "Add Product Image"}
					</Text>
				</div>
			</div>
		);

		return (
			<Form onSubmit={this.handleSubmit} className='product-form'>
				<Row style={{ height: "100%" }}>
					<Text style={{ fontSize: "14px" }} strong>
						New Product
					</Text>
					<Row style={{ marginTop: "30px", height: "calc(100% - 200px)", minHeight: "300px" }}>
						<Col span={9}>
							<Form.Item className='upload-item'>
								{getFieldDecorator("imageUrl", {
									rules: [
										{
											required: true,
											message: "Please select the product image!"
										}
									]
								})(
									<Upload
										showUploadList={false}
										onChange={this.handleChange}
										className='product-upload'
									>
										{imageUrl ? (
											<img src={imageUrl} alt='product' className='productimage' />
										) : (
											productImage
										)}
									</Upload>
								)}
							</Form.Item>
							<Row style={{ marginTop: "25px" }}>
								<Text>Default retail price:</Text>
								<Row>
									<Form.Item style={{ width: "calc(100% - 120px)", display: "inline-block" }}>
										{getFieldDecorator("defaultRetail", {
											rules: [
												{
													required: true,
													message: "Please input your product default retail price!"
												},
												{ validator: this.isNumber }
											]
										})(<Input />)}
									</Form.Item>
									<Text style={{ display: "inline-block", marginTop: "10px", marginLeft: "10px" }}>
										1 unit
									</Text>
								</Row>
							</Row>
						</Col>
						<Col span={15}>
							<Row style={{ height: "calc(100% - 60px)" }}>
								<Row>
									<Text>Product name:</Text>
									<Form.Item>
										{getFieldDecorator("productName", {
											rules: [{ required: true, message: "Please input your product name!" }]
										})(<Input placeholder='Enter name' />)}
									</Form.Item>
								</Row>
								<Row>
									<Text>Watch on the DDD site:</Text>
									<Form.Item>
										{getFieldDecorator("dddLink", {
											rules: [
												{ required: true, message: "Please input your product DDD site link!" }
											]
										})(<Input placeholder='Enter link' />)}
									</Form.Item>
								</Row>
								<Row style={{ height: "calc(100% - 200px)" }}>
									<Text>Description:</Text>
									<Form.Item className='product-description'>
										{getFieldDecorator("description", {
											rules: [
												{ required: true, message: "Please input your product description!" }
											]
										})(<TextArea placeholder='Enter description' />)}
									</Form.Item>
								</Row>
							</Row>
							<Row style={{ marginTop: "20px" }}>
								<Text>Default wholesale price:</Text>
								<Row gutter={20}>
									<Col span={12}>
										<Form.Item>
											{getFieldDecorator("defaultWholeSale", {
												rules: [
													{
														required: true,
														message: "Please input your product default wholesale price!"
													},
													{ validator: this.isNumber }
												]
											})(<Input placeholder='' />)}
										</Form.Item>
									</Col>
									<Col span={12}>
										<Form.Item style={{ display: "inline-block" }}>
											{getFieldDecorator("defaultUnits", { initialValue: 10 })(
												<InputNumber min={2} />
											)}
										</Form.Item>
										<Text
											style={{ display: "inline-block", marginTop: "10px", marginLeft: "10px" }}
										>
											units or more
										</Text>
									</Col>
								</Row>
							</Row>
						</Col>
					</Row>
					<Divider style={{ marginTop: "50px" }} />
					<Row>
						<Row style={{ float: "right" }}>
							<Button className='login-form-button' onClick={this.cancelSubmit}>
								Cancel
							</Button>
							<Button type='primary' htmlType='submit' className='login-form-button'>
								Save
							</Button>
						</Row>
					</Row>
				</Row>
			</Form>
		);
	}
}

export default Form.create({ name: "newproduct" })(NewProductForm);
