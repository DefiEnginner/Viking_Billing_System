import React from "react";
import { Card, Row, Col, Typography, Checkbox, Button } from "antd";

import "./index.css";

const { Text, Title, Paragraph } = Typography;
class ProductItem extends React.Component {
	render() {
		return (
			<Card>
				<Row type='flex' justify='space-between'>
					<Col xs={24} md={8} lg={8} xl={7} style={{ alignItems: "center" }}>
						<img
							src='images/Seed/item1.png'
							alt='Smiley face'
							width='240'
							height='240'
							style={{ marginLeft: "calc(50% - 120px)" }}
						/>
					</Col>
					<Col xs={24} md={10} lg={12} xl={12}>
						<Row>
							<Title level={2}>
								<Text>PRODUCT NAME</Text>
							</Title>
						</Row>
						<Row>
							<a href='/'>Watch more on the DDD site</a>
						</Row>
						<Row>
							<Paragraph>
								Introducing the Flexes Q5. Specially built for remote off-grid scada applications
								requiring extreme robustness. Low power consumption and eas of use
							</Paragraph>
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
										<Text>$80</Text>
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
										<Text>$60</Text>
									</Title>
									10 units or more
								</Row>
							</Col>
						</Row>
					</Col>
					<Col xs={24} md={6} lg={4} xl={5}>
						<Row>
							<Row>
								<Checkbox>Not available now</Checkbox>
							</Row>
							<Row>
								<Checkbox>Do not show</Checkbox>
							</Row>
						</Row>
						<Row style={{ marginTop: "calc(100% - 120px)" }}>
							<Row>
								<Button type='primary' block>
									EDIT
								</Button>
							</Row>
							<Row>
								<Button block>DELETE</Button>
							</Row>
						</Row>
					</Col>
				</Row>
			</Card>
		);
	}
}

export default ProductItem;
