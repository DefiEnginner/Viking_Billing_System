import SignInPage from "./containers/SignInPage";
import ForgotPasswordPage from "./containers/ForgotPasswordPage";
import SignUpPage from "./containers/SignUpPage";
import ProductsListPage from "./containers/ProductsListPage";
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
	},
	{
		path: "/products-list",
		exact: true,
		component: Base(ProductsListPage)
	}
];

export default routes;
