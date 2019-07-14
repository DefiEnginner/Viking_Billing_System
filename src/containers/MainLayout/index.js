import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import { withRouter } from "react-router-dom";

import { Layout, Menu, Icon } from "antd";
import "./index.css";

const { Header, Content } = Layout;

/**
 * Base component
 */
export default (WrappedComponent, isHeader = true) => {
	class MainLayout extends Component {
		items = [
			{
				title: "Dashboard"
			},
			{
				title: "Contracts list"
			},
			{
				title: "Clients list"
			},
			{
				title: "Products"
			},
			{
				title: "Purchase history"
			}
		];

		routes = ["/dashboard", "/contracts-list", "/clients-list", "products-list", "purchase-history"];

		constructor(props) {
			super(props);
			this.state = {
				selectedIndex: 0
			};
		}
		onClickNavigation = ({ item, key, keyPath }) => {
			if (this.state.selectedIndex + "" != keyPath) {
				const { history } = this.props;
				this.setState({ selectedIndex: keyPath });
				console.log(this.routes[keyPath]);
				history.push(this.routes[keyPath]);
			}
		};
		render() {
			return isHeader ? (
				<Layout className='layout'>
					<Header className='header'>
						<div className='logo'>
							<img style={{ height: "50px" }} src='images/logo_viking_dark.svg' alt='VSLOGO' />
						</div>
						<Menu
							className='antmenu'
							theme='light'
							mode='horizontal'
							selectedKeys={[this.state.selectedIndex + ""]}
							onClick={this.onClickNavigation}
						>
							{this.items.map((item, index) => (
								<Menu.Item key={index}>
									<span>{item.title}</span>
								</Menu.Item>
							))}
						</Menu>
					</Header>
					<Content
						style={{
							margin: "24px 36px",
							padding: 24,
							background: "#fff"
						}}
					>
						<WrappedComponent />
					</Content>
				</Layout>
			) : (
				<WrappedComponent />
			);
		}
	}

	const mapStateToProps = state => ({
		auth: state.authentication
	});

	const mapDispatchToProps = dispatch => {
		return {};
	};

	return withRouter(
		compose(
			connect(
				mapStateToProps,
				mapDispatchToProps
			)
		)(MainLayout)
	);
};
