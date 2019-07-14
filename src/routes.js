import SignInPage from "./containers/SignInPage";
import ForgotPasswordPage from "./containers/ForgotPasswordPage";
import SignUpPage from "./containers/SignUpPage";
import Base from "./containers/MainLayout";

const routes = [
	{
		path: "/signin",
		exact: true,
		component: Base(SignInPage, false)
	},
	{
		path: "/signup",
		exact: true,
		component: Base(SignUpPage, false)
	},
	{
		path: "/forgot-password",
		exact: true,
		component: Base(ForgotPasswordPage, false)
	},
	{
		path: "/",
		exact: true,
		component: Base(SignInPage)
	}
];

export default routes;
