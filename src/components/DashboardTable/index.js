/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Table, Icon, Dropdown, Menu } from "antd";

import "./index.scss";

const customExpandIcon = props => {
	return (
		<a onClick={e => props.onExpand(props.record, e)}>
			<Icon type={props.expanded ? "caret-down" : "caret-right"} />
		</a>
	);
};

class NestedTable extends React.Component {
	actionMenu = (
		<Menu>
			<Menu.Item key='0'>
				<a>Export PDF</a>
			</Menu.Item>
			<Menu.Item key='1'>
				<a>Export Excel</a>
			</Menu.Item>
			<Menu.Item key='3'>
				<a>Print</a>
			</Menu.Item>
		</Menu>
	);
	actionColumn = {
		title: "Actions",
		align: "center",
		dataIndex: "actions",
		key: "actions",
		render: () => (
			<div>
				<a onClick={() => {}}>
					<Icon type='eye' className='eyeball' />
				</a>
				<Dropdown overlay={this.actionMenu} trigger={["click"]}>
					<a onClick={() => {}}>
						<Icon type='ellipsis' />
					</a>
				</Dropdown>
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

		const expandedRowRender = parentData => {
			const data = parentData.innerData;
			return <Table columns={this.props.innerColumns} dataSource={data} pagination={false} />;
		};

		return (
			<div>
				<Table
					expandedRowRender={expandedRowRender}
					dataSource={this.props.data}
					columns={columns}
					rowClassName='editable-row'
					pagination={{ pageSize: 7 }}
					expandIcon={customExpandIcon}
					rowKey='orderID'
				/>
			</div>
		);
	}
}

export default NestedTable;
