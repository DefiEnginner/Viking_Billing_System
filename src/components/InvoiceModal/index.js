import React from "react";
import { Row, Typography, Divider, Table, Button, Icon } from "antd";
import "./index.scss";

const { Text } = Typography;

class OrderTable extends React.Component {
	columns = [
		{
			title: "Date",
			dataIndex: "date",
			key: "date"
		},
		{
			title: "Order ID",
			dataIndex: "orderID",
			key: "orderID"
		},
		{
			title: "Contract number",
			dataIndex: "contractNumber",
			key: "contractNumber"
		},
		{
			title: "Invoice To",
			dataIndex: "invoiceTo",
			key: "invoiceTo"
		}
	];
	render() {
		return <Table columns={this.columns} dataSource={this.props.data} pagination={false} />;
	}
}

class ProductTable extends React.Component {
	columns = [
		{
			title: "Name Product",
			dataIndex: "nameProduct",
			key: "nameProduct"
		},
		{
			title: "#",
			dataIndex: "qty",
			key: "qty"
		},
		{
			title: "$ for 1",
			dataIndex: "price",
			key: "price",
			render: price => "$" + price
		},
		{
			title: "AMOUNT",
			dataIndex: "amount",
			key: "amount",
			render: price => <Text strong>{"$" + price}</Text>
		}
	];
	render() {
		return <Table columns={this.columns} dataSource={this.props.data} pagination={false} />;
	}
}

class ResultTable extends React.Component {
	columns = [
		{
			title: "BANK",
			dataIndex: "bank",
			key: "bank"
		},
		{
			title: "ACC.NO.",
			dataIndex: "accNumber",
			key: "accNumber"
		},
		{
			title: "DUE DATE",
			dataIndex: "dueDate",
			key: "dueDate"
		},
		{
			title: "TOTAL PRICE",
			dataIndex: "totalPrice",
			key: "totalPrice",
			render: totalPrice => (
				<Text strong style={{ fontSize: "20px" }}>
					{"$" + totalPrice}
				</Text>
			)
		}
	];
	render() {
		return <Table columns={this.columns} dataSource={this.props.data} pagination={false} />;
	}
}

class InvoiceModal extends React.Component {
	static defaultProps = {
		contractNumber: "237545678254",
		bank: "BARCLAYS",
		accNumber: "1232353464574",
		dueDate: new Date()
	};
	render() {
		const {
			date,
			orderID,
			contractNumber,
			companyName,
			bank,
			accNumber,
			dueDate,
			innerData,
			setInvoiceIndex
		} = this.props;
		const orderTableData = [
			{
				date: date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear(),
				orderID,
				contractNumber,
				invoiceTo: companyName
			}
		];
		const productTableData = innerData.map(product => ({
			nameProduct: product.nameProduct,
			qty: product.qty,
			price: product.price,
			amount: product.price * product.qty
		}));
		const resultTableData = [
			{
				bank,
				accNumber,
				dueDate: dueDate.getMonth() + "/" + dueDate.getDate() + "/" + dueDate.getFullYear(),
				totalPrice: innerData.reduce((prd1, prd2) => prd1.price * prd1.qty + prd2.price * prd2.qty)
			}
		];
		return (
			<div className='order-container'>
				<Row style={{ marginBottom: "50px" }}>
					<div style={{ float: "right" }}>
						<Button>Export PDF</Button>
						<Button>Export PDF</Button>
						<Button>Export PDF</Button>
						<Button
							style={{ marginLeft: "20px", marginBottom: "0px", padding: "8px", height: "40px" }}
							onClick={() => setInvoiceIndex()}
						>
							<Icon type='close' style={{ fontSize: "24px" }} />
						</Button>
					</div>
				</Row>
				<Row style={{ marginBottom: "60px" }}>
					<Text style={{ fontSize: "36px" }} strong>
						INVOICE
					</Text>
					<div style={{ float: "right" }}>
						<Text style={{ fontSize: "24px", display: "block" }} strong>
							Viking SCADA LLC
						</Text>
						<Text style={{ fontSize: "18px" }}>3235 S Harvard Ave Tulsa, OK 74135</Text>
					</div>
				</Row>
				<Divider />
				<Row className='ordertable_container'>
					<OrderTable data={orderTableData} />
				</Row>
				<Row className='producttable_container'>
					<ProductTable data={productTableData} />
				</Row>
				<Row className='resulttable_container'>
					<ResultTable data={resultTableData} />
				</Row>
			</div>
		);
	}
}

export default InvoiceModal;
