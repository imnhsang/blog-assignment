import { Auth } from '../../constants/actionTypes'

export const requestAuth = () => ({
	type: Auth.REQUEST_AUTH,
})

export const loginSuccess = (uid) => ({
	type: Auth.LOGIN_SUCCESS,
	payload: { uid },
})

export const loginFail = (err) => ({
	type: Auth.LOGIN_FAIL,
	payload: { err },
})

export const signoutSuccess = () => ({
	type: Auth.SIGNOUT_SUCCESS,
})

export const signoutFail = (err) => ({
	type: Auth.SIGNOUT_FAIL,
	payload: { err },
})

export const signupSuccess = (uid) => ({
	type: Auth.SIGNUP_SUCCESS,
	payload: { uid },
})

export const signupFail = (err) => ({
	type: Auth.SIGNUP_FAIL,
	payload: { err },
})