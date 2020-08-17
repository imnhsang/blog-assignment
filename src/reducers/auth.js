import { Auth } from '../constants/actionTypes'
// import { setAccountToStorage, clearStorage } from '../utils'

const initialState = {
	account: null,
	isInitialized: false,
	loading: false,
}

const auth = (state = initialState, action) => {
	switch (action.type) {
		case Auth.LOGIN_SUCCESS:
			return { ...state }
		case Auth.LOGIN_FAIL:
      return { ...state }
		case Auth.SIGNOUT_SUCCESS:
      return { ...state }
		case Auth.SIGNOUT_FAIL:
      return { ...state }
		case Auth.SIGNUP_SUCCESS:
      return { ...state }
		case Auth.SIGNUP_FAIL:
      return { ...state }
		case Auth.REQUEST_AUTH:
      return { ...state }
		case Auth.RECEIVE_AUTH_DATA:
      return { ...state }
		default:
			return state
	}
}

export default auth
