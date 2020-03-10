import axios from 'axios';

class AxiosService {
	constructor() {
		const instance = axios.create();
		axios.interceptors.response.use(this.handleSuscess, this.handleError);
		this.instance = instance;
	}

	handleSuscess(res) {
		return res;
	}

	handleError(error) {
		return Promise.reject(error);
	}

	get(url) {
		return this.instance.get(url);
	}
}

export default new AxiosService();
