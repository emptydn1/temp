import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import modal from './modals';
import taskReducer from './task';
import ui from './ui';

const rootReducer = combineReducers({
	task: taskReducer,
	ui,
	modal,
	form: formReducer
});

export default rootReducer;
