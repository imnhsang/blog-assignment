import { User } from '../../constants/actionTypes'

export const requestUserData = () => ({
	type: User.REQUEST_USER_DATA,
})

export const receiveUserData = (user) => ({
	type: User.RECEIVE_USER_DATA,
	payload: { user },
})

export const responseUserDataFail = () => ({
	type: User.RESPONSE_USER_DATA_FAIL,
})

