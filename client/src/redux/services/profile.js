import {
	requestGetProfile,
	getProfile,
	requestUpdateProfile,
	updateProfile,
	failRequestProfile,
} from '../actions/profile'
import api from 'api'
import { isSuccess } from 'helpers'
import fire from 'config/fire'

const fetchProfile = (uid) => async (dispatch) => {
	try {
		dispatch(requestGetProfile())

		const res = await api.get(`/users/${uid}`)
		if (isSuccess(res)) {
			const { data } = res
			dispatch(getProfile(data.data))
		} else {
			const { errors } = res.data
			dispatch(failRequestProfile(errors[0].msg))
		}
	} catch (error) {
		dispatch(failRequestProfile('Something wrong happened ...'))
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

export const refreshProfile = (avatarFile, updateProfileData) => async (
	dispatch,
	getState
) => {
	try {
		dispatch(requestUpdateProfile())

		const { profile } = getState()
		const { profile: profileData } = profile
		let urlNewAvatar = ''

		if (avatarFile) {
			const refAvatar = 'users/' + profileData.uid + '/profile.jpg'

			await fire.storage().ref(refAvatar).put(avatarFile)

			urlNewAvatar = await fire.storage().ref(refAvatar).getDownloadURL()
		}

		const body = {
			...profileData,
			avatar: urlNewAvatar || profileData.avatar || '',
			firstname: updateProfileData.firstname || profileData.firstname,
			lastname: updateProfileData.lastname || profileData.lastname,
		}

		const res = await api.post('/users/update-profile', body)
		if (isSuccess(res)) {
			dispatch(updateProfile(body))
			return true
		} else {
			const { errors } = res.data
			dispatch(failRequestProfile(errors[0].msg))
			return false
		}
	} catch (error) {
		console.log(error)
		dispatch(failRequestProfile('Something wrong happened ...'))
		return false
	}
}
