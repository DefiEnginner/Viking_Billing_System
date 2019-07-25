import { types } from "../actions";
import Cookies from "js-cookie";

const { PRODUCT } = types;

const initialState = {
	token: Cookies.get("BRJWT") || null,
	loading: false,
	success: false,
	productList: []
};

function productReducer(state = initialState, action) {
	switch (action.type) {
		case PRODUCT.ADDPRODUCT_REQUEST:
			return { ...state, loading: true };
		case PRODUCT.ADDPRODUCT_SUCCESS:
			return { ...state, loading: false, success: true };
		case PRODUCT.ADDPRODUCT_FAILED:
			return { ...state, loading: false };
		case PRODUCT.SETSUCCESS:
			return { ...state, success: action.success };
		case PRODUCT.GETPRODUCTS_REQUEST:
			return { ...state, loading: true };
		case PRODUCT.GETPRODUCTS_SUCCESS:
			return { ...state, loading: false, productList: action.products };
		case PRODUCT.GETPRODUCTS_FAILED:
			return { ...state, loading: false };
		case PRODUCT.EDITPRODUCT_REQUEST:
			return { ...state, loading: true };
		case PRODUCT.EDITPRODUCT_SUCCESS:
			return { ...state, loading: false, success: true };
		case PRODUCT.EDITPRODUCT_FAILED:
			return { ...state, loading: false };
		case PRODUCT.DELETEPRODUCT_REQUEST:
			return { ...state, loading: true };
		case PRODUCT.DELETEPRODUCT_SUCCESS:
			return { ...state, loading: false, success: true };
		case PRODUCT.DELETEPRODUCT_FAILED:
			return { ...state, loading: false };
		default: {
			return state;
		}
	}
}

export default productReducer;
