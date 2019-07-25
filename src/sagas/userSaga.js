import { takeLatest, all, put, takeEvery } from "redux-saga/effects";
import { types, userActions } from "../actions";
import { backendUrl } from "../utils";
import axios from "axios";
const { USER } = types;
const {
	receiveSignUp,
	cancelSignUp,
	receiveSignIn,
	cancelSignIn,
	receiveGetUser,
	cancelGetUser,
	requestGetUser
} = userActions;

function* signInRequest(action) {
	try {
		const resp = yield axios.post(backendUrl + "/signIn", action.payload);
		console.log(resp.data.token);
		if (resp.data.token) {
			yield put(receiveSignIn(resp.data.token));
			yield put(requestGetUser());
		} else {
			yield put(cancelSignIn(resp.data));
		}
	} catch (e) {
		yield put(cancelSignIn(e.response ? e.response.data.error : "Network Error"));
	}
}

function* signUpRequest(action) {
	console.log("signup", action.payload);
	try {
		const resp = yield axios.post(backendUrl + "/signUp", action.payload);
		yield put(receiveSignUp(resp.data));
	} catch (e) {
		yield put(cancelSignUp(e.response ? e.response.data.error : "Network Error"));
	}
}

function* getUser(action) {
	try {
		const resp = yield axios.get(backendUrl + "/api/user", { token: action.token });
		yield put(receiveGetUser(resp.data));
	} catch (e) {
		yield put(cancelGetUser(e.response ? e.response.data.error : "Network Error"));
	}
}

function* userSaga() {
	yield all([
		takeLatest(USER.SIGNIN_REQUEST, signInRequest),
		takeLatest(USER.SIGNUP_REQUEST, signUpRequest),
		takeLatest(USER.GETUSER_REQUEST, getUser)
	]);
}

export default userSaga;
