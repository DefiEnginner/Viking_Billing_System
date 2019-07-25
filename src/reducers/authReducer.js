import { types } from "../actions";
import Cookies from "js-cookie";
import { TOKEN_TIME } from "../utils";
import axios from "axios";

const { USER } = types;

const initialState = {
	token: Cookies.get("BRJWT") || null,
	loading: false,
	msg: "",
	remember: false,
	user: null
};

if (initialState.token) {
	axios.defaults.headers.common.Authorization = initialState.token;
}

function authReducer(state = initialState, action) {
	switch (action.type) {
		case USER.SIGNIN_REQUEST: {
			return {
				...state,
				loading: true,
				remember: action.remember
			};
		}
		case USER.SIGNIN_SUCCESS: {
			Cookies.remove("BRJWT");
			const token = "Bearer " + action.payload.token;
			if (state.remember) {
				const d = new Date();
				d.setTime(d.getTime() + TOKEN_TIME * 1000);
				Cookies.set("BRJWT", token, {
					expires: d
				});
			} else {
				Cookies.set("BRJWT", token);
			}

			axios.defaults.headers.common.Authorization = token;
			return { ...state, token, loading: false, msg: "Login Success", remember: false };
		}
		case USER.SIGNIN_FAILED:
			return { ...state, token: null, loading: false, msg: action.error };
		case USER.SIGNOUT:
			Cookies.remove("BRJWT");
			delete axios.defaults.headers.common.Authorization;
			return { ...state, token: null, msg: "User Logout", user: null };
		case USER.SIGNUP_REQUEST:
			return { ...state, loading: true };
		case USER.SIGNUP_SUCCESS:
			console.log(action.payload);
			return { ...state, token: null, msg: "Signup Success" };
		case USER.SIGNUP_FAILED:
			return { ...state, token: null, msg: action.error, loading: false };
		case USER.SETMSG:
			return { ...state, msg: action.msg };
		case USER.GETUSER_REQUEST:
			return { ...state, loading: true };
		case USER.GETUSER_SUCCESS:
			console.log("getuser succ", action.user);
			return { ...state, loading: false, user: action.user };
		case USER.GETUSER_FAILED:
			return { ...state, loading: false };
		default: {
			return state;
		}
	}
}

export default authReducer;
