import SignInPage from "./containers/SignInPage";
import ForgotPasswordPage from "./containers/ForgotPasswordPage";
import SignUpPage from "./containers/SignUpPage";
import ProductsListPage from "./containers/ProductsListPage";
import Base from "./containers/MainLayout";
import DashboardPage from "./containers/DashboardPage";

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
		component: Base(DashboardPage, true, 0)
	},
	{
		path: "/products-list",
		exact: true,
		component: Base(ProductsListPage, true, 2)
	}
];

export default routes;
