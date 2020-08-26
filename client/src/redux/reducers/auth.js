import { Auth } from '../../constants/actionTypes'
import { setUIDToStorage, clearStorage, getUIDFromStorage } from 'utils'
import { failToastify } from 'helpers'

const initialState = {
	isAuthenticated: !!getUIDFromStorage(),
	loading: false,
}

const auth = (state = initialState, action) => {
	switch (action.type) {
		case Auth.LOGIN_SUCCESS:
			setUIDToStorage(action.payload.uid)
			return { ...state, isAuthenticated: true, loading: false }
		case Auth.LOGIN_FAIL:
			failToastify(action.payload.err)
			return { ...state, loading: false }
		case Auth.SIGNOUT_SUCCESS:
			clearStorage()
			return { ...state, isAuthenticated: false }
		case Auth.SIGNOUT_FAIL:
			failToastify(action.payload.err)
			return { ...state }
		case Auth.SIGNUP_SUCCESS:
			setUIDToStorage(action.payload.uid)
			return { ...state, isAuthenticated: true, loading: false }
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
