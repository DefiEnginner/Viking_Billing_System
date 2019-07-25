import React from "react";
import SignInPage from "./containers/SignInPage";
import ForgotPasswordPage from "./containers/ForgotPasswordPage";
import SignUpPage from "./containers/SignUpPage";
import ProductsListPage from "./containers/ProductsListPage";
import Base from "./containers/MainLayout";
import DashboardPage from "./containers/DashboardPage";
import ClientsListPage from "./containers/ClientListPage";
import { Redirect } from "react-router";

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
		component: Base(DashboardPage, true)
	},
	{
		path: "/products-list",
		exact: true,
		component: Base(ProductsListPage, true)
	},
	{
		path: "/products-list/:id",
		exact: true,
		component: Base(ProductsListPage, true)
	},
	{
		path: "/clients-list",
		exact: true,
		render: () => <Redirect to='/clients-list/pending' />
	},
	{
		path: "/clients-list/:type",
		exact: true,
		component: Base(ClientsListPage, true)
	},
	{
		path: "/clients-list/:type/:id",
		exact: true,
		component: Base(ClientsListPage, true)
	}
];

export default routes;
