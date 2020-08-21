import { toast } from 'react-toastify'

import { Auth } from '../constants/actionTypes'
import { setUIDToStorage, clearStorage } from 'utils'

const initialState = {
	loading: false,
}

const failToastify = (err) =>
	toast.error(err, {
		position: 'top-right',
		autoClose: 3000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	})

const auth = (state = initialState, action) => {
	switch (action.type) {
		case Auth.LOGIN_SUCCESS:
			setUIDToStorage(action.payload.uid)
			return { ...state, loading: false }
		case Auth.LOGIN_FAIL:
			failToastify(action.payload.err)
			return { ...state, loading: false }
		case Auth.SIGNOUT_SUCCESS:
			clearStorage()
			return { ...state }
		case Auth.SIGNOUT_FAIL:
			failToastify(action.payload.err)
			return { ...state }
		case Auth.SIGNUP_SUCCESS:
			setUIDToStorage(action.payload.uid)
			return { ...state, loading: false }
		case Auth.SIGNUP_FAIL:
			failToastify(action.payload.err)
			return { ...state, loading: false }
		case Auth.REQUEST_AUTH:
			return { ...state, loading: true }
		default:
			return state
	}
}

export default auth
