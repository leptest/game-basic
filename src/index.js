import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router'; // react-router v4/v5
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './store/index';
import HomeWindow from './components/HomeWindow';
import FightWindow from './components/FightWindow';

import './index.scss';

const store = configureStore(/* initial state - doesn't seem to be working correctly */);


// import Player from './components/Player';
// import List from './components/List';
// import Form from './components/Form';
// import Character from './classes/character';
// const daniel = new Character({ name: 'Daniel' });
// const demon = new Character({ name: 'Demon' });
// daniel.equip('shield');
// daniel.attack(demon);
// demon.reportInfo();


ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}> { /* place ConnectedRouter under Provider */ }
			<> { /* your usual react-router v4/v5 routing */ }
				<Switch>
					<Route exact path="/" component={HomeWindow} />
					<Route exact path="/fight" component={FightWindow} />
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
