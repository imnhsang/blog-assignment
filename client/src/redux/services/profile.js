import {
	requestProfile,
	getProfile,
	failRequestProfile,
} from '../actions/profile'
import api from 'api'
import { isSuccess } from 'helpers'

const fetchProfile = (uid) => async (dispatch) => {
	try {
		dispatch(requestProfile())

		const res = await api.get(`/users/${uid}`)
		if (isSuccess(res)) {
			const { data } = res
			dispatch(getProfile(data.data))
		} else {
			const { errors } = res.data
			dispatch(failRequestProfile(errors[0].msg))
		}
	} catch (error) {
		dispatch(failRequestProfile(error.response.data.errors[0].msg))
	}
}

const shouldFetchProfile = (state) => {
	const { isInitialized } = state
	return !isInitialized
}

export const fetchProfileIfNeeded = (uid) => (dispatch, getState) => {
	if (shouldFetchProfile(getState().profile)) {
		return dispatch(fetchProfile(uid))
	}
	return true
}
