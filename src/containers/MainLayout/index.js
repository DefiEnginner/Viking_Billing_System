import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import { withRouter } from "react-router-dom";

import { Layout, Menu, Typography, Button, Dropdown, Icon, Divider, notification } from "antd";
import "./index.css";

import { userActions } from "../../actions";
const { signOut, setStatusMsg, requestGetUser } = userActions;

const { Text } = Typography;
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
				title: "Clients list"
			},
			{
				title: "Products"
			},
			{
				title: "Purchase history"
			}
		];

		routes = ["/", "/clients-list", "/products-list", "/purchase-history"];

		menuIndex = 0;

		overProfile = (
			<div style={{ width: "350px", background: "white", border: "1px solid rgba(50, 180, 255, 0.3)" }}>
				<div style={{ background: "rgba(50, 180, 255, 0.1)", height: "100px", padding: "40px 20px" }}>
					<Text strong style={{ fontSize: "16px" }}>
						Distributors
					</Text>
				</div>
				<div style={{ paddingTop: "20px", paddingLeft: "20px" }}>
					<Text>My Profile</Text>
					<Text style={{ float: "right", marginRight: "20px" }}>
						<Icon type='right' />
					</Text>
				</div>
				<Divider />
				<div style={{ paddingLeft: "20px", paddingBottom: "20px" }}>
					<Button
						style={{ background: "rgba(50, 180, 255, 0.1)", border: "none" }}
						onClick={this.props.signOut}
					>
						Sign Out
					</Button>
				</div>
			</div>
		);

		constructor(props) {
			super(props);

			this.onClickNavigation = this.onClickNavigation.bind(this);
		}

		onClickNavigation = ({ item, key, keyPath }) => {
			const numberKey = Number(keyPath[0]);
			if (this.menuIndex !== numberKey) {
				const { history } = this.props;
				history.push(this.routes[numberKey]);
			}
		};

		checkSignedIn(props) {
			const { msg, token, history, user } = props;
			if (token) {
				if (user) {
					if (user.role === "customer" && this.items.length === 4) {
						this.items.splice(1, 1);
						this.items[1].title = "Market";
						this.routes.splice(1, 1);
						this.forceUpdate();
					}
				}
				const path = this.props.history.location.pathname.split("/");
				this.menuIndex = this.routes.indexOf("/" + path[1]);
				if (history.location.pathname === "/signin" || history.location.pathname === "/signup") {
					history.push("/");
				}
			} else if (history.location.pathname !== "/signin" && history.location.pathname !== "/signup") {
				history.push("/signin");
			}

			if (msg !== "") {
				if (msg.includes("Logout")) {
					notification.info({ placement: "bottomRight", duration: 3, message: "Info", description: msg });
				} else if (msg.includes("Success")) {
					notification.success({
						placement: "bottomRight",
						duration: 3,
						message: "Success",
						description: msg
					});
				} else {
					notification.error({ placement: "bottomRight", duration: 3, message: "Error", description: msg });
				}
			}

			if (msg === "Signup success") {
				history.push("/signin");
			}

			this.props.setStatusMsg("");
		}

		componentWillMount() {
			this.checkSignedIn(this.props);
		}

		componentWillReceiveProps(props) {
			this.checkSignedIn(props);
		}

		render() {
			return isHeader ? (
				<Layout className='layout'>
					<Header className='header'>
						<div className='logo'>
							<img style={{ height: "50px" }} src='../images/logo.svg' alt='VSLOGO' />
						</div>
						<Menu
							className='antmenu'
							theme='light'
							mode='horizontal'
							selectedKeys={[this.menuIndex + ""]}
							onClick={this.onClickNavigation}
						>
							{this.items.map((item, index) => (
								<Menu.Item key={index}>
									<span>{item.title}</span>
								</Menu.Item>
							))}
						</Menu>
						<Dropdown overlay={this.overProfile} trigger={["click"]}>
							<Button
								style={{
									float: "right",
									marginTop: "30px",
									background: "rgba(50, 180, 255, 0.1)",
									border: "none",
									height: "40px"
								}}
							>
								SA
							</Button>
						</Dropdown>
					</Header>
					<Content
						style={{
							margin: "24px 36px",
							padding: 24,
							background: "#fff",
							overflowY: "auto"
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
		token: state.authentication.token,
		loading: state.authentication.loading,
		msg: state.authentication.msg,
		user: state.authentication.user
	});

	const mapDispatchToProps = dispatch => {
		return {
			signOut: () => dispatch(signOut()),
			setStatusMsg: msg => dispatch(setStatusMsg(msg)),
			requestGetUser: () => dispatch(requestGetUser())
		};
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
