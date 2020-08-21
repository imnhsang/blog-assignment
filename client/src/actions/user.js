import { User } from '../constants/actionTypes'
import api from 'api'

export const initializedUserData = (status) => ({
	type: User.INITAILIZED_USER_DATA,
	payload: { status },
})

export const requestUserData = () => ({
	type: User.REQUEST_USER_DATA,
})

export const receiveUserData = (user) => ({
	type: User.RECEIVE_USER_DATA,
	payload: { user },
})

export const failedRequestUserData = () => ({
	type: User.FAILED_REQUEST_USER_DATA,
})

const fetchUserData = async (uid) => (dispatch) => {
	dispatch(requestUserData())
	try {
		const res = api.get(`/user/${uid}`)
		console.log(res)
	} catch (err) {
		console.log(err)
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
