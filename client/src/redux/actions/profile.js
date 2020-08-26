import { Profile } from '../../constants/actionTypes'

export const requestGetProfile = () => ({
	type: Profile.REQUEST_GET_PROFILE,
})

export const getProfile = (data) => ({
	type: Profile.GET_PROFILE,
	payload: { data },
})

export const requestUpdateProfile = () => ({
	type: Profile.REQUEST_UPDATE_PROFILE,
})

export const updateProfile = (data) => ({
	type: Profile.UPDATE_PROFILE,
	payload: { data },
})

export const failRequestProfile = (err) => ({
	type: Profile.PROFILE_ERROR,
	payload: { err },
})