import React from "react";
import ClientTable from "../../components/ClientTable";
import { roles } from "../../utils";
import userData from "./userData";
import { Typography, Row, Menu } from "antd";
import { withRouter } from "react-router-dom";

const { SUPERADMIN, DISTRIBUTOR, CUSTOMER } = roles;
const { Text } = Typography;

class ClientListPage extends React.Component {
	static defaultProps = {
		role: SUPERADMIN,
		userData
	};
	headers = ["Client Pending", "Distributors", "Customers", "Archive"];
	locations = ["pending", "distributor", "customer", "archive"];
	columns = [
		{
			title: "Contract number",
			align: "center",
			dataIndex: "contractNumber",
			key: "contractNumber"
		},
		{
			title: "Company Name",
			align: "center",
			dataIndex: "companyName",
			key: "companyName"
		},
		{
			title: "Email",
			align: "center",
			dataIndex: "email",
			key: "email"
		},
		{
			title: "Phone numbers",
			align: "center",
			dataIndex: "phoneNumber",
			key: "phoneNumber",
			render: phoneNumber => {
				const number1 = parseInt(phoneNumber % 10000);
				const number2 = parseInt((phoneNumber / 10000) % 1000);
				const number3 = parseInt(phoneNumber / 10000000);
				return number3 + "-" + number2 + "-" + number1;
			}
		},
		{
			title: "Role",
			align: "center",
			dataIndex: "role",
			key: "role"
		},
		{
			title: "Status",
			align: "center",
			dataIndex: "status",
			key: "status"
		},
		{
			title: "Added",
			align: "center",
			dataIndex: "added",
			key: "added",
			render: date => date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear()
		}
	];
	clientType = null;
	clientId = null;
	constructor(props) {
		super(props);
		this.state = {
			pendingIndex: -1,
			distributorIndex: -1,
			customerIndex: -1,
			archiveIndex: -1
		};

		const location = this.props.history.location.pathname.split("/");
		this.clientType = location[2];
		this.clientId = location[3];
	}
	setPendingIndex = email => {
		const pendingIndex = email ? this.props.userData.findIndex(user => user.email === email) : -1;
		this.setState({ pendingIndex });
	};
	setDistributorIndex = email => {
		const distributorIndex = email ? this.props.userData.findIndex(user => user.email === email) : -1;
		this.setState({ distributorIndex });
	};
	setCustomerIndex = email => {
		const customerIndex = email ? this.props.userData.findIndex(user => user.email === email) : -1;
		this.setState({ customerIndex });
	};
	setArchiveIndex = email => {
		const archiveIndex = email ? this.props.userData.findIndex(user => user.email === email) : -1;
		this.setState({ archiveIndex });
	};
	currentTypeIndex = type => this.locations.indexOf(this.clientType);

	onClickNavigation = ({ item, key, keyPath }) => {
		const numberKey = Number(keyPath[0]);
		if (this.currentTypeIndex() !== numberKey) {
			const { history } = this.props;
			history.push("/clients-list/" + this.locations[numberKey]);
		}
	};
	render() {
		const { role, userData } = this.props;
		const columns = this.columns.slice(0);
		switch (role) {
			case SUPERADMIN:
				if (this.clientType === "pending" || this.clientType === "archive") {
					columns.splice(6, 1);
				} else {
					columns.splice(4, 1);
				}
				break;
			case DISTRIBUTOR:
				columns.splice(4, 1);
				if (this.clientType === "pending" || this.clientType === "archive") {
					columns.splice(5, 1);
				}
				break;
			default:
				break;
		}

		const params = {
			columns,
			data:
				this.clientType === "pending" || this.clientType === "archive"
					? userData.filter(user => user.status === this.clientType)
					: userData.filter(user => user.role === this.clientType && user.status === "active")
		};

		const selectedIndex = [this.currentTypeIndex() + ""];

		return (
			<div>
				<Row style={{ marginBottom: "20px" }}>
					<Menu mode='horizontal' selectedKeys={selectedIndex} onClick={this.onClickNavigation}>
						{this.headers.map((header, index) => (
							<Menu.Item key={index + ""}>
								<Text style={{ marginLeft: "20px" }} strong>
									{header}
								</Text>
							</Menu.Item>
						))}
					</Menu>
				</Row>
				{!this.clientId ? <ClientTable {...params} setIndex={this.setPendingIndex} /> : null}
			</div>
		);
	}
}

export default withRouter(ClientListPage);
