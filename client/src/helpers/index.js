import {toast} from 'react-toastify'

export const isSuccess = (res) => {
	const { status } = res
	switch (status) {
		case 200:
		case 201:
			return true
		default:
			return false
	}
}

export const failToastify = (err) =>
	toast.error(err, {
		position: 'top-right',
		autoClose: 1500,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	})

export const successToastify = (text) =>
	toast.success(text, {
		position: 'top-right',
		autoClose: 1500,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	})
