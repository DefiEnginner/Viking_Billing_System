import React from "react";
import { compose } from "recompose";
import { Route, Switch, withRouter } from "react-router-dom";
import MainPage from "./containers/MainPage";
import SignInPage from "./containers/SignInPage";
import ForgotPasswordPage from "./containers/ForgotPasswordPage";
import SignUpPage from "./containers/SignUpPage";

const App = () => (
	<Switch>
		<Route exact path='/' component={MainPage} />
		<Route path='/signin' component={SignInPage} />
		<Route path='/forgot-password' component={ForgotPasswordPage} />
		<Route path='/signup' component={SignUpPage} />
	</Switch>
);

export default compose(withRouter)(App);
