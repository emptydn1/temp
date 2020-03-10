import * as taskConstants from '../constants/task';
import * as toast from '../helpers/toastHelper';

const initialState = { task: [] };

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case taskConstants.FETCH_TASK: {
			return {
				...state,
				task: []
			};
		}
		case taskConstants.FETCH_TASK_FAILED: {
			const { err } = action.payload;
			toast.toasts(err);
			return {
				...state,
				task: []
			};
		}
		case taskConstants.FETCH_TASK_SUCCESS: {
			const { data } = action.payload;
			toast.toasts(data);
			return {
				...state,
				task: data
			};
		}
		case taskConstants.FILTER_TASK_SUCCESS: {
			const { data } = action.payload;
			return {
				...state,
				task: data
			};
		}
		default:
			return state;
	}
};

export default reducer;
