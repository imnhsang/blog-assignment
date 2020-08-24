import { Profile } from '../../constants/actionTypes'

export const requestProfile = () => ({
	type: Profile.REQUEST_PROFILE,
})

export const getProfile = (data) => ({
	type: Profile.GET_PROFILE,
	payload: { data },
})

export const failRequestProfile = (err) => ({
	type: Profile.PROFILE_ERROR,
	payload: { err },
})
