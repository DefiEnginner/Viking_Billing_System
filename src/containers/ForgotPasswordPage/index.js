import React, { Component } from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import { userActions } from "../../actions";
import ForgotPasswordForm from "../../components/ForgotPasswordForm";
import { Row, Col, Layout } from "antd";

const { requestSignIn } = userActions;

class ForgotPasswordPage extends Component {
	componentDidMount() {}

	render() {
		return (
			<Row type='flex' justify='center' align='middle' style={{ height: "100%" }}>
				<Col xs={20} sm={14} md={9} lg={8} xl={7} xxl={6}>
					<ForgotPasswordForm />
				</Col>
			</Row>
		);
	}
}

const mapStateToProps = state => ({
	auth: state.authentication
});

const mapDispatchToProps = dispatch => {
	return {
		requestSignIn
	};
};

export default compose(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)
)(ForgotPasswordPage);
