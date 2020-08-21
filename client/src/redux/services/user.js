import {
	requestUserData,
	receiveUserData,
	responseUserDataFail,
} from '../actions/user'
import api from 'api'
import { isSuccess } from 'helpers'

const fetchUserData = (uid) => async (dispatch) => {
	try {
		dispatch(requestUserData())

		const res = await api.get(`/users/${uid}`)
		if (isSuccess(res)) {
			const { data } = res
			dispatch(receiveUserData(data.data))
		} else {
			const { errors } = res.data
			dispatch(responseUserDataFail(errors[0].msg))
		}
	} catch (error) {
		dispatch(responseUserDataFail(error.response.data.errors[0].msg))
	}
}

const shouldFetchUserData = (state) => {
	const { isInitialized } = state
	return !isInitialized
}

export const fetchUserDataIfNeeded = (uid) => (dispatch, getState) => {
	if (shouldFetchUserData(getState().user)) {
		return dispatch(fetchUserData(uid))
	}
	return true
}
