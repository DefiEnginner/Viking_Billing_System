import { USER } from "./types";
import { notification } from "antd";

export function requestSignIn(payload) {
	return { type: USER.SIGNIN_REQUEST, payload };
}

export function receiveSignIn(token) {
	return { type: USER.SIGNIN_SUCCESS, payload: { token, remember: false } };
}

export function cancelSignIn(error) {
	return { type: USER.SIGNIN_FAILED, error };
}

export function requestSignUp(payload) {
	return { type: USER.SIGNUP_REQUEST, payload };
}

export function receiveSignUp(data) {
	return { type: USER.SIGNUP_SUCCESS, payload: { data } };
}

export function cancelSignUp(error) {
	return { type: USER.SIGNUP_FAILED, error };
}

export function signOut() {
	return { type: USER.SIGNOUT };
}

export function setStatusMsg(msg) {
	return { type: USER.SETMSG, msg };
}

export function requestGetUser(token) {
	return { type: USER.GETUSER_REQUEST, token };
}

export function receiveGetUser(user) {
	return { type: USER.GETUSER_SUCCESS, user };
}

export function cancelGetUser(error) {
	notification.error({
		placement: "bottomRight",
		duration: 3,
		message: "Error",
		description: error
	});
	return { type: USER.GETUSER_FAILED, error };
}
