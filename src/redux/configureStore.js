import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';
import mySaga from '../sagas/index';

const composeEnhancers =
	process.env.NODE_ENV !== 'production' &&
	typeof window === 'object' &&
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
				shouldHotReload: false
		  })
		: compose;

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
	const middleWares = [thunk, sagaMiddleware];
	const enhancers = [applyMiddleware(...middleWares)];
	const store = createStore(rootReducer, composeEnhancers(...enhancers));
	sagaMiddleware.run(mySaga);
	return store;
};

export default configureStore;
