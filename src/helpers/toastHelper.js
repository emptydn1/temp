import { toast } from 'react-toastify';

export const toasts = err => {
	let message = null;
	if (typeof err === 'object' && err.message) {
		({ message } = err);
	}
	if (message !== null && typeof message !== 'undefined' && message !== '') {
		toast.error(`${message}`, {
			position: 'bottom-right',
			autoClose: 4000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true
		});
	} else {
		toast.success('success!', {
			position: 'bottom-right',
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true
		});
	}
};
