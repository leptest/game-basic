// import { createStore } from 'redux';
import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from '../reducers/index';
// import createRootReducer from './reducers'

// const store = createStore(createRootReducer);

// export default store;

export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
	// console.log('preloadedState', preloadedState);

	const store = createStore(
		createRootReducer(history), // root reducer with router state
		preloadedState,
		compose(
			applyMiddleware(
				routerMiddleware(history), // for dispatching history actions
				// ... other middlewares ...
			),
		),
	);

	// console.log('store', store);

	return store;
}
