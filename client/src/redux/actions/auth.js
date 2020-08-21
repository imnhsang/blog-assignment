import { Auth } from '../../constants/actionTypes'

export const requestAuth = () => ({
	type: Auth.REQUEST_AUTH,
})

export const responseLoginSuccess = (uid) => ({
	type: Auth.LOGIN_SUCCESS,
	payload: { uid },
})

export const responseLoginFail = (err) => ({
	type: Auth.LOGIN_FAIL,
	payload: { err },
})

export const responseSignoutSuccess = () => ({
	type: Auth.SIGNOUT_SUCCESS,
})

export const responseSignoutFail = (err) => ({
	type: Auth.SIGNOUT_FAIL,
	payload: { err },
})

export const responseSignupSuccess = (uid) => ({
	type: Auth.SIGNUP_SUCCESS,
	payload: { uid },
})

export const responseSignupFail = (err) => ({
	type: Auth.SIGNUP_FAIL,
	payload: { err },
})