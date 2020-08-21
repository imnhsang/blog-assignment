import { User } from '../../constants/actionTypes'

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

