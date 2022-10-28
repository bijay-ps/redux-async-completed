import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers'

/*const enhancers = compose(
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const store = createStore(
	rootReducer,
	enhancers
)*/


// ==========================


const composeEnhancers =
	typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
			// Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
		})
		: compose;

const middlewares = [thunk]
const enhancer = composeEnhancers(
	applyMiddleware(...middlewares)
	// other store enhancers if any
);

export const store = createStore(rootReducer, enhancer);