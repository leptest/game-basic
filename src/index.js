import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router'; // react-router v4/v5
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './store/index';
import FightWindow from './components/FightWindow';

import './index.scss';

const store = configureStore(/* initial state - doesn't seem to be working correctly */);

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}> { /* place ConnectedRouter under Provider */ }
			<> { /* your usual react-router v4/v5 routing */ }
				<Switch>
					<Route exact path="/" component={FightWindow} />
					<Route render={() => (<div>Miss</div>)} />
				</Switch>
			</>
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root'),
);
//
//
// import store from './store/index';
// import App from './App';
//
// ReactDOM.render(
// 	<Provider store={store}>
// 		<App />
// 	</Provider>,
// 	document.getElementById('root'),
// );
