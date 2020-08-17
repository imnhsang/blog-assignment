import { Auth } from '../constants/actionTypes'
import fire from '../config/fire'
import api from 'api'

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

export const signup = (inforUser) => (dispatch) => {
	fire
		.auth()
		.createUserWithEmailAndPassword(inforUser.email, inforUser.password)
		.then(async (user) => {
			try {
				const body = {
					email: inforUser.email,
					firstname: inforUser.firstname,
					lastname: inforUser.lastname,
					country: inforUser.country,
					uid: user.user.uid,
				}
				await api.post('/signup', body)

				return dispatch({
					type: Auth.SIGNUP_SUCCESS,
					payload: { user: user.user },
				})
			} catch (error) {
				console.log(error)
			}
		})
		.catch((err) => dispatch({ type: Auth.SIGNUP_FAIL, payload: { err } }))
}

const fetchAuthData = () => (dispatch) => {
	dispatch(requestAuthData())
	try {
		fire.auth().onAuthStateChanged((user) => {
			if (user) {
				dispatch(receiveAuthData(user))
				dispatch(initializedAuthData(true))
			}else{
        dispatch(initializedAuthData(true))
      }
		})
	} catch (error) {
		console.log(error)
	}
}

const shouldFetchAuthData = (state) => {
	const { isInitialized } = state
	if (!isInitialized) return true
	return false
}

export const fetchAuthDataIfNeeded = () => (dispatch, getState) => {
	if (shouldFetchAuthData(getState().auth)) {
		return dispatch(fetchAuthData())
	}
	return Promise.resolve()
}
