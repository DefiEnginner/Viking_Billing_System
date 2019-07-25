import { combineReducers } from "redux";
import authReducer from "./authReducer";
import productReducer from "./productReducer";

const appReducer = asyncReducers =>
	combineReducers({
		authentication: authReducer,
		products: productReducer,
		...asyncReducers
	});

function rootReducer(asyncReducers) {
	return appReducer(asyncReducers);
}

export default rootReducer;
