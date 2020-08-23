import {
	requestAuth,
	loginSuccess,
	loginFail,
	signoutSuccess,
	signoutFail,
	signupSuccess,
	signupFail,
} from '../actions/auth'
import { isSuccess } from 'helpers'
import api from 'api'

export const loginWithEmailPassword = (email, password) => async (dispatch) => {
	try {
		dispatch(requestAuth())

		const body = { email, password }
		const res = await api.post('/auth/signin-emailpassword', body)

		if (isSuccess(res)) {
			const { data } = res
			dispatch(loginSuccess(data.data.uid))
		} else {
			const { errors } = res.data
			dispatch(loginFail(errors[0].msg))
		}
	} catch (error) {
		dispatch(loginFail(error.response.data.errors[0].msg))
	}
}

export const signout = () => async (dispatch) => {
	try {
		const res = await api.post('/auth/signout')

		if (isSuccess(res)) {
			dispatch(signoutSuccess())
		} else {
			const { errors } = res.data
			return dispatch(signoutFail(errors[0].msg))
		}
	} catch (error) {
		dispatch(signoutFail(error.response.data.errors[0].msg))
	}
}

export const signup = (inforUser) => async (dispatch) => {
	try {
		dispatch(requestAuth())

		const body = {
			email: inforUser.email,
			firstname: inforUser.firstname,
			lastname: inforUser.lastname,
			password: inforUser.password,
			country: inforUser.country,
		}
		const res = await api.post('/auth/signup', body)

		if (isSuccess(res)) {
			const { data } = res
			return dispatch(signupSuccess(data.data.uid))
		} else {
			const { errors } = res.data
			dispatch(signupFail(errors[0].msg))
		}
	} catch (error) {
		dispatch(signupFail(error.response.data.errors[0].msg))
	}
}
