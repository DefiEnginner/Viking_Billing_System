import React from "react";
import { Card, Row, Col, Typography, Checkbox, Button } from "antd";
import { roles } from "../../utils";
import "./index.scss";

const { SUPERADMIN, DISTRIBUTOR, CUSTOMER } = roles;

const { Text, Title, Paragraph } = Typography;
class ProductItem extends React.Component {
	editProduct = () => {
		this.props.editProduct(this.props._id);
	};
	deleteProduct = () => {
		this.props.deleteProduct(this.props._id);
	};
	render() {
		const {
			imageUrl,
			productName,
			dddLink,
			description,
			defaultRetail,
			defaultWholeSale,
			defaultUnits,
			user
		} = this.props;
		return (
			<Card>
				<Row type='flex' justify='space-between'>
					<Col xs={24} md={8} lg={8} xl={7} style={{ alignItems: "center" }}>
						<img
							src={imageUrl}
							alt='Smiley face'
							width='240'
							height='240'
							style={{ marginLeft: "calc(50% - 120px)" }}
						/>
					</Col>
					<Col xs={24} md={10} lg={12} xl={12}>
						<Row>
							<Title level={2}>
								<Text>{productName}</Text>
							</Title>
						</Row>
						<Row>
							<a href={dddLink}>Watch more on the DDD site</a>
						</Row>
						<Row>
							<Paragraph>{description}</Paragraph>
						</Row>
						<Row type='flex' justify='space-around'>
							<Col>
								<Row>
									<Title level={4}>
										<Text>Retail price</Text>
									</Title>
								</Row>
								<Row>
									<Title level={3}>
										<Text>{`$${defaultRetail}`}</Text>
									</Title>
									1 unit
								</Row>
							</Col>
							<Col>
								<Title level={4}>
									<Text>Wholesale price</Text>
								</Title>

								<Row>
									<Title level={3}>
										<Text>{`$${defaultWholeSale}`}</Text>
									</Title>
									{`${defaultUnits}`} units or more
								</Row>
							</Col>
						</Row>
					</Col>
					<Col xs={24} md={6} lg={4} xl={5}>
						{user && user.role !== CUSTOMER && (
							<Row>
								<Row>
									<Checkbox>Not available now</Checkbox>
								</Row>
								{user.role === DISTRIBUTOR && (
									<Row>
										<Checkbox>Do not show</Checkbox>
									</Row>
								)}
							</Row>
						)}
						<Row className='action_buttons'>
							{user && user.role !== CUSTOMER && (
								<Row>
									<Button type='primary' block onClick={this.editProduct}>
										EDIT
									</Button>
								</Row>
							)}
							{user && user.role === SUPERADMIN && (
								<Row>
									<Button block onClick={this.deleteProduct}>
										DELETE
									</Button>
								</Row>
							)}
							{user && user.role === CUSTOMER && (
								<Row>
									<Button block onClick={this.addToCart} type='primary'>
										Add TO CART
									</Button>
								</Row>
							)}
						</Row>
					</Col>
				</Row>
			</Card>
		);
	}
}

export default ProductItem;
