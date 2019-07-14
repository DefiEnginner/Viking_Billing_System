import React, { Component } from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import { userActions } from "../../actions";
import ProductItem from "../../components/ProductItem";
import { Row, Col } from "antd";
import { withRouter } from "react-router-dom";

const { requestSignIn } = userActions;

class ProductsListPage extends Component {
	super(props) {}

	componentDidMount() {}

	render() {
		return (
			<Row style={{ height: "100%" }}>
				<Row>
					<ProductItem />
				</Row>
				<Row>
					<ProductItem />
				</Row>
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

export default withRouter(
	compose(
		connect(
			mapStateToProps,
			mapDispatchToProps
		)
	)(ProductsListPage)
);
