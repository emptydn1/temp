import * as uiTypes from '../constants/ui';

export const showloading = () => {
	return {
		type: uiTypes.SHOW_LOADING
	};
};

export const hideloading = () => {
	return {
		type: uiTypes.HIDE_LOADING
	};
};
