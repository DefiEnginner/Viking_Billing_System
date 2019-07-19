import React, { Component } from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import { userActions } from "../../actions";
import SignInForm from "../../components/SignInForm";
import { Row, Col } from "antd";
import { withRouter } from "react-router-dom";

const { requestSignIn } = userActions;

class SignInPage extends Component {
	componentDidMount() {}

	handleSubmit = values => {
		this.props.history.push("/");
	};

	render() {
		return (
			<Row type='flex' justify='center' align='middle' style={{ height: "100%" }}>
				<Col xs={20} sm={14} md={9} lg={8} xl={7} xxl={6}>
					<SignInForm handleSubmit={this.handleSubmit} />
				</Col>
			</Row>
		);
	}
}

const mapStateToProps = state => ({
	auth: state.authentication
});

const mapDispatchToProps = () => {
	return {
		requestSignIn
	};
};

export default withRouter(
	compose(
		connect(
			mapStateToProps,
			mapDispatchToProps
		)
	)(SignInPage)
);
