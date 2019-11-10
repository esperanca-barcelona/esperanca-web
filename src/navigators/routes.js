import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../screens/Home';
import Lists from '../screens/Lists';

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/lists" component={Lists} />
		</Switch>
	);
};

export default Routes;
