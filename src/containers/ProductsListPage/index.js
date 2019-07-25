import React, { Component } from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import { productActions } from "../../actions";
import ProductItem from "../../components/ProductItem";
import { Row, Spin, Button } from "antd";
import { withRouter } from "react-router-dom";
import NewProductForm from "../../components/NewProductForm";
import EditProductForm from "../../components/EditProductForm";
import { roles } from "../../utils";

const { SUPERADMIN, DISTRIBUTOR, CUSTOMER } = roles;

const { requestAddProduct, setSuccess, getProductsRequest, requestEditProduct, requestDeleteProduct } = productActions;

class ProductsListPage extends Component {
	productId = null;
	constructor(props) {
		super(props);

		const location = this.props.history.location.pathname.split("/");
		this.productId = location[2];

		this.props.getProductsRequest();
	}

	componentWillReceiveProps(props) {
		if (props.success) {
			props.history.push("/products-list");
			props.setSuccess(false);
		}
	}

	componentDidMount() {}

	addProduct = () => {
		this.props.history.push("/products-list/new");
	};

	cancelSubmit = () => {
		this.props.history.push("/products-list");
	};

	submitProduct = product => {
		this.props.requestAddProduct(product);
	};

	cancelEdit = () => {
		this.props.history.push("/products-list");
	};

	submitEditProduct = product => {
		this.props.requestEditProduct(product);
	};

	editProduct = id => {
		this.props.history.push("/products-list/" + id);
	};

	deleteProduct = id => {
		this.props.requestDeleteProduct(id);
	};

	render() {
		let product = null;
		if (this.productId && this.productId !== "new") {
			const index = this.props.productList.findIndex(prd => prd._id === this.productId);
			product = this.props.productList[index];
		}
		return (
			<Spin spinning={this.props.loading}>
				{" "}
				{!this.productId ? (
					<Row style={{ height: "100%" }}>
						{this.props.user && this.props.user.role === SUPERADMIN && (
							<Row>
								<Button
									type='primary'
									style={{ marginBottom: "10px", float: "right" }}
									onClick={this.addProduct}
								>
									Add Product
								</Button>
							</Row>
						)}
						{this.props.productList.map(product => (
							<Row key={product.productName}>
								<ProductItem
									{...product}
									editProduct={this.editProduct}
									deleteProduct={this.deleteProduct}
									user={this.props.user}
								/>
							</Row>
						))}
					</Row>
				) : this.productId === "new" ? (
					<NewProductForm cancelAdd={this.cancelSubmit} handleSubmit={this.submitProduct} />
				) : (
					<EditProductForm cancelEdit={this.cancelEdit} handleSubmit={this.submitEditProduct} {...product} />
				)}
			</Spin>
		);
	}
}

const mapStateToProps = state => ({
	auth: state.authentication,
	success: state.products.success,
	productList: state.products.productList,
	loading: state.products.loading,
	user: state.authentication.user
});

const mapDispatchToProps = dispatch => {
	return {
		requestAddProduct: payload => dispatch(requestAddProduct(payload)),
		setSuccess: suc => dispatch(setSuccess(suc)),
		getProductsRequest: () => dispatch(getProductsRequest()),
		requestEditProduct: payload => dispatch(requestEditProduct(payload)),
		requestDeleteProduct: id => dispatch(requestDeleteProduct(id))
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
