import axios from 'axios';

/**
 * set baseurl for all axios request
 */
axios.defaults.baseURL = process.env.REACT_APP_API_URL_V4;
axios.defaults.timeout = 5000;

// Add a request interceptor
axios.interceptors.request.use(
	function (config) {
		// console.log('request interceptors', config.url);
		// Do something before request is sent

		let authToken;
		let status;

		if (localStorage.getItem('state') !== null) {
			let state = localStorage.getItem('state');
			state = JSON.parse(state);
			authToken = state?.auth?.driver?.authToken;
			status = state?.auth?.driver?.status;
		}

		try {
			if (status === 1) {
				config.headers.Authorization = `Bearer ${authToken}`;
			}
		} catch (error) {
			console.log('catch', error);
		}

		return config;
	},
	function (error) {
		// Do something with request error
		return Promise.reject(error);
	}
);

// Add a response interceptor
axios.interceptors.response.use(
	function (response) {
		// console.log('response interceptors', response);
		// Any status code that lie within the range of 2xx cause this function to trigger
		// Do something with response data
		return response;
	},
	function (error) {
		// Any status codes that falls outside the range of 2xx cause this function to trigger
		// Do something with response error
		return Promise.reject(error);
	}
);

export default axios;
