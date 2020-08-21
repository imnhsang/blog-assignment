import {
	requestAuth,
	responseLoginSuccess,
	responseLoginFail,
	responseSignoutSuccess,
	responseSignoutFail,
	responseSignupSuccess,
	responseSignupFail,
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
			dispatch(responseLoginSuccess(data.data.uid))
		} else {
			const { errors } = res.data
			dispatch(responseLoginFail(errors[0].msg))
		}
	} catch (error) {
		dispatch(responseLoginFail(error.response.data.errors[0].msg))
	}
}

export const signout = () => async (dispatch) => {
	try {
		const res = await api.post('/auth/signout')

		if (isSuccess(res)) {
			dispatch(responseSignoutSuccess())
		} else {
			const { errors } = res.data
			return dispatch(responseSignoutFail(errors[0].msg))
		}
	} catch (error) {
		dispatch(responseSignoutFail(error.response.data.errors[0].msg))
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
			return dispatch(responseSignupSuccess(data.data.uid))
		} else {
			const { errors } = res.data
			dispatch(responseSignupFail(errors[0].msg))
		}
	} catch (error) {
		dispatch(responseSignupFail(error.response.data.errors[0].msg))
	}
}
