import { toast } from 'react-toastify'

import { Auth } from '../constants/actionTypes'

const initialState = {
	uid: null,
	isInitialized: false,
	loadingAuth: false,
	loadingSign: false,
}

const failtToastify = (err) =>
	toast.error(err, {
		position: 'top-right',
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	})

const auth = (state = initialState, action) => {
	switch (action.type) {
		case Auth.LOGIN_SUCCESS:
			return { ...state, uid: action.payload.user.uid, loadingSign: false }
		case Auth.LOGIN_FAIL:
			failtToastify(action.payload.err.message)
			return { ...state, loadingSign: false }
		case Auth.SIGNOUT_SUCCESS:
			return { ...state, uid: null }
		case Auth.SIGNOUT_FAIL:
			return { ...state }
		case Auth.SIGNUP_SUCCESS:
			return { ...state, uid: action.payload.user.uid }
		case Auth.SIGNUP_FAIL:
			return { ...state }
		case Auth.REQUEST_AUTH:
			return { ...state, loadingAuth: true }
		case Auth.REQUEST_SIGN:
			return { ...state, loadingSign: true }
		case Auth.RECEIVE_AUTH_DATA:
			return { ...state, uid: action.payload.user.uid }
		case Auth.INITIALIZED_AUTH_DATA:
			return { ...state, isInitialized: action.status, loadingAuth: false }
		default:
			return state
	}
}

export default auth
