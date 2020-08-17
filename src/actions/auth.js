import { Auth } from '../constants/actionTypes'
import fire from '../config/fire'

export const initializedAuthData = (status) => ({
	type: Auth.INITIALIZED_AUTH_DATA,
	payload: { status },
})

export const requestAuthData = () => ({
	type: Auth.REQUEST_AUTH,
})

export const requestSign = () => ({
	type: Auth.REQUEST_SIGN,
})

export const receiveAuthData = (user) => ({
	type: Auth.RECEIVE_AUTH_DATA,
	payload: { user },
})

export const loginWithEmailPassword = (email, password) => (dispatch) => {
	dispatch(requestSign())
	fire
		.auth()
		.signInWithEmailAndPassword(email, password)
		.then((user) =>
			dispatch({ type: Auth.LOGIN_SUCCESS, payload: { user: user.user } })
		)
		.catch((err) => dispatch({ type: Auth.LOGIN_FAIL, payload: { err } }))
}

export const signout = () => (dispatch) => {
	fire
		.auth()
		.signOut()
		.then(() => dispatch({ type: Auth.SIGNOUT_SUCCESS }))
		.catch((err) => dispatch({ type: Auth.SIGNOUT_FAIL, payload: { err } }))
}

const fetchAuthData = () => (dispatch) => {
	dispatch(requestAuthData())
	try {
		fire.auth().onAuthStateChanged((user) => {
			dispatch(receiveAuthData(user))
			dispatch(initializedAuthData(true))
		})
	} catch (error) {
		console.log(error)
	}
}

const shouldFetchAuthData = (state) => {
	const { initialized } = state
	if (!initialized) return true
	return false
}

export const fetchAuthDataIfNeeded = () => (dispatch, getState) => {
	if (shouldFetchAuthData(getState().auth)) {
		return dispatch(fetchAuthData())
	}
	return Promise.resolve()
}
