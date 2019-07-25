import { PRODUCT } from "./types";
import { notification } from "antd";

export function getProductsRequest() {
	return { type: PRODUCT.GETPRODUCTS_REQUEST };
}

export function getProductsSuccess(products) {
	return { type: PRODUCT.GETPRODUCTS_SUCCESS, products };
}

export function getProductsCancel(error) {
	notification.error({
		placement: "bottomRight",
		duration: 3,
		message: "Error",
		description: error
	});
	return { type: PRODUCT.GETPRODUCTS_FAILED, error };
}

export function setSuccess(suc) {
	return { type: PRODUCT.SETSUCCESS, success: suc };
}

export function requestAddProduct(payload) {
	return { type: PRODUCT.ADDPRODUCT_REQUEST, payload };
}

export function successAddProduct() {
	notification.success({
		placement: "bottomRight",
		duration: 3,
		message: "Success",
		description: "Product sucessfully created"
	});
	return { type: PRODUCT.ADDPRODUCT_SUCCESS };
}

export function cancelAddProduct(error) {
	notification.error({
		placement: "bottomRight",
		duration: 3,
		message: "Error",
		description: error
	});
	return { type: PRODUCT.ADDPRODUCT_FAILED, error };
}

export function requestEditProduct(payload) {
	return { type: PRODUCT.EDITPRODUCT_REQUEST, payload };
}

export function successEditProduct() {
	notification.success({
		placement: "bottomRight",
		duration: 3,
		message: "Success",
		description: "Product sucessfully edited"
	});
	return { type: PRODUCT.EDITPRODUCT_SUCCESS };
}

export function cancelEditProduct(error) {
	notification.error({
		placement: "bottomRight",
		duration: 3,
		message: "Error",
		description: error
	});
	return { type: PRODUCT.EDITPRODUCT_FAILED, error };
}

export function requestDeleteProduct(id) {
	return { type: PRODUCT.DELETEPRODUCT_REQUEST, id };
}

export function successDeleteProduct() {
	notification.success({
		placement: "bottomRight",
		duration: 3,
		message: "Success",
		description: "Product sucessfully deleted"
	});
	return { type: PRODUCT.DELETEPRODUCT_SUCCESS };
}

export function cancelDeleteProduct(error) {
	notification.error({
		placement: "bottomRight",
		duration: 3,
		message: "Error",
		description: error
	});
	return { type: PRODUCT.DELETEPRODUCT_FAILED, error };
}
