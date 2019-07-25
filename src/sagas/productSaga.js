import { takeLatest, all, put } from "redux-saga/effects";
import { types, productActions } from "../actions";
import { backendUrl } from "../utils";
import axios from "axios";
const { PRODUCT } = types;
const {
	successAddProduct,
	cancelAddProduct,
	getProductsSuccess,
	getProductsCancel,
	successEditProduct,
	cancelEditProduct,
	successDeleteProduct,
	cancelDeleteProduct
} = productActions;

const endpoint = backendUrl + "/api/products";

function* addProduct(action) {
	try {
		const payload = {
			...action.payload,
			defaultRetail: Number(action.payload.defaultRetail),
			defaultWholeSale: Number(action.payload.defaultWholeSale)
		};
		console.log("payload", payload);
		const resp = yield axios.post(endpoint, payload);
		console.log("response", resp);
		if (resp) {
			yield put(successAddProduct());
		} else {
			yield put(cancelAddProduct(resp.data.error));
		}
	} catch (e) {
		console.log("error", e);
		yield put(cancelAddProduct(e.response ? e.response.data.error : "Network Error"));
	}
}

function* editProduct(action) {
	try {
		const payload = {
			...action.payload,
			defaultRetail: Number(action.payload.defaultRetail),
			defaultWholeSale: Number(action.payload.defaultWholeSale)
		};
		console.log("payload", payload);
		const resp = yield axios.put(endpoint, payload);
		console.log("response", resp);
		if (resp) {
			yield put(successEditProduct());
		} else {
			yield put(cancelEditProduct(resp.data.error));
		}
	} catch (e) {
		console.log("error", e);
		yield put(cancelEditProduct(e.response ? e.response.data.error : "Network Error"));
	}
}

function* deleteProduct(action) {
	try {
		console.log(action.id);
		const resp = yield axios.delete(endpoint + `/?productID=${action.id}`);
		console.log("response", resp);
		if (resp) {
			yield put(successDeleteProduct());
		} else {
			yield put(cancelDeleteProduct(resp.data.error));
		}
	} catch (e) {
		console.log("error", e);
		yield put(cancelDeleteProduct(e.response ? e.response.data.error : "Network Error"));
	}
}

function* getProductsRequest(action) {
	try {
		const resp = yield axios.get(endpoint);
		yield put(getProductsSuccess(resp.data));
	} catch (e) {
		yield put(getProductsCancel(e.response ? e.response.data.error : "Network Error"));
	}
}

function* productSaga() {
	yield all([
		takeLatest(PRODUCT.ADDPRODUCT_REQUEST, addProduct),
		takeLatest(PRODUCT.GETPRODUCTS_REQUEST, getProductsRequest),
		takeLatest(PRODUCT.EDITPRODUCT_REQUEST, editProduct),
		takeLatest(PRODUCT.DELETEPRODUCT_REQUEST, deleteProduct)
	]);
}

export default productSaga;
