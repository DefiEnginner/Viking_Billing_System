import React from "react";
import { compose } from "recompose";
import { Route, Switch, withRouter } from "react-router-dom";
import shortid from "shortid";
import routes from "./routes";

const App = () => (
	<Switch>
		{routes.map(route => (
			<Route key={shortid.generate()} {...route} />
		))}
	</Switch>
);

export default compose(withRouter)(App);
