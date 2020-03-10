import axiosService from '../conmons/axiosService';
import { ENDPOINT } from '../constants';

const url = 'abc';

export const getList = () => {
	return axiosService.get(`${ENDPOINT}/${url}`);
};
