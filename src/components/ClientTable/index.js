/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Table, Icon } from "antd";

import "./index.scss";

class ClientTable extends React.Component {
	actionColumn = {
		title: "Actions",
		align: "center",
		dataIndex: "actions",
		key: "actions",
		render: (action, record) => (
			<div>
				<a onClick={() => this.props.setIndex(record.email)}>
					<Icon type='check-square' className='check-square' fill='rgba(50, 150, 255, 0.1)' />
				</a>
				<a onClick={() => this.props.archiveUser(record.email)}>
					<Icon type='delete' fill='rgba(50, 150, 255, 0.1)' />
				</a>
			</div>
		)
	};
	constructor(props) {
		super(props);
		this.state = {
			width: 0,
			height: 0
		};
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}

	componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener("resize", this.updateWindowDimensions);
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.updateWindowDimensions);
	}

	updateWindowDimensions() {
		this.setState({ width: window.innerWidth, height: window.innerHeight });
	}

	render() {
		const columns = this.props.columns.slice();
		columns.push(this.actionColumn);
		return (
			<div>
				<Table
					dataSource={this.props.data}
					columns={columns}
					rowClassName='editable-row'
					pagination={{ pageSize: 7 }}
					rowKey='email'
				/>
			</div>
		);
	}
}

export default ClientTable;
