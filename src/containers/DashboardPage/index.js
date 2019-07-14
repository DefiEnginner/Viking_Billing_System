import React from "react";
import DashboardTable from "../../components/DashboardTable";
import { roles } from "../../utils";
import orderData from "./orderData";
const { SUPERADMIN, DISTRIBUTOR, CUSTOMER } = roles;

class DashboardPage extends React.Component {
	static defaultProps = {
		role: SUPERADMIN,
		orderData
	};
	columns = [
		{
			title: "Order Id",
			align: "center",
			dataIndex: "orderID",
			key: "orderId"
		},
		{
			title: "Date",
			align: "center",
			dataIndex: "date",
			key: "date",
			render: date => date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear()
		},
		{
			title: "Company Name",
			align: "center",
			dataIndex: "companyName",
			key: "companyName"
		},
		{
			title: "QTY",
			align: "center",
			dataIndex: "qty",
			key: "qty"
		},
		{
			title: "Payment type",
			align: "center",
			dataIndex: "paymentType",
			key: "paymentType"
		},
		{
			title: "Payment Status",
			align: "center",
			dataIndex: "paymentStatus",
			key: "paymentStatus"
		},
		{
			title: "Delivery Status",
			align: "center",
			dataIndex: "deliveryStatus",
			key: "deliveryStatus"
		},
		{
			title: "Address",
			align: "center",
			dataIndex: "address",
			key: "address"
		},
		{
			title: "Total Price",
			align: "center",
			dataIndex: "totalPrice",
			key: "totlaPrice",
			render: price => "$" + price
		}
	];
	innerColumns = [
		{
			title: "Name Product",
			align: "center",
			dataIndex: "nameProduct",
			key: "nameProduct"
		},
		{
			title: "Goldner-Lehner",
			align: "center",
			dataIndex: "goldnerLehner",
			key: "goldnerLehner"
		},
		{
			title: "#",
			align: "center",
			dataIndex: "qty",
			key: "qty"
		},
		{
			title: "Credit Card",
			align: "center",
			dataIndex: "creditCard",
			key: "creditCard"
		},
		{
			title: "$ for 1",
			align: "center",
			dataIndex: "price",
			key: "price",
			render: price => "$" + price
		},
		{
			title: "Total Price",
			align: "center",
			dataIndex: "totalPrice",
			key: "totalPrice"
		}
	];
	render() {
		const { role } = this.props;
		const columns = this.columns.slice(0);
		const innerColumns = this.innerColumns.slice(0);
		switch (role) {
			case SUPERADMIN:
				columns.splice(7, 1);
				break;
			case DISTRIBUTOR:
				innerColumns.splice(3, 1);
				break;
			case CUSTOMER:
				columns.splice(2);
				innerColumns.splice(1, 1);
				break;
			default:
				break;
		}

		const params = {
			columns,
			innerColumns,
			data: this.props.orderData
		};
		return <DashboardTable {...params} />;
	}
}

export default DashboardPage;
