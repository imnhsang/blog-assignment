import { Auth } from '../constants/actionTypes'
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

export const receiveAuthData = (uid) => ({
	type: Auth.RECEIVE_AUTH_DATA,
	payload: { uid },
})

export const loginWithEmailPassword = (email, password) => async (dispatch) => {
	dispatch(requestSign())

	const body = { email, password }
	const res = await api.post('/auth/signin-emailpassword', body)

	const { status, data } = res

	if (status === 200) {
		return dispatch({
			type: Auth.LOGIN_SUCCESS,
			payload: { uid: data.data.uid },
		})
	} else {
		const { errors } = data
		return dispatch({ type: Auth.LOGIN_FAIL, payload: { err: errors[0].msg } })
	}
}

export const signout = () => async (dispatch) => {
	const res = await api.post('/auth/signout')

	const { status, data } = res

	if (status === 200) {
		return dispatch({ type: Auth.SIGNOUT_SUCCESS })
	} else {
		const { errors } = data
		return dispatch({
			type: Auth.SIGNOUT_FAIL,
			payload: { err: errors[0].msg },
		})
	}
}

export const signup = (inforUser) => async (dispatch) => {
	console.log(inforUser)
	const body = {
		email: inforUser.email,
		firstname: inforUser.firstname,
		lastname: inforUser.lastname,
		password: inforUser.password,
		country: inforUser.country,
	}

	const res = await api.post('/auth/signup', body)

  const { status, data } = res
  
	if (status === 201) {
		return dispatch({
			type: Auth.SIGNUP_SUCCESS,
			payload: { uid: data.data.uid },
		})
	} else {
		const { errors } = data
		dispatch({ type: Auth.SIGNUP_FAIL, payload: { err: errors[0].msg } })
	}
}

const fetchAuthData = () => async (dispatch) => {
	dispatch(requestAuthData())

	const res = await api.post('/auth/currently-signedin')

	const { status, data } = res

	if (status === 200) {
		dispatch(receiveAuthData(data.data.uid))
		dispatch(initializedAuthData(true))
	} else {
		dispatch(initializedAuthData(true))
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
