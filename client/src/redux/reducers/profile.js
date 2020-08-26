import { Profile } from '../../constants/actionTypes'
import { clearStorage } from 'utils'
import { failToastify, successToastify } from 'helpers'

const initialState = {
	profile: null,
	isInitialized: false,
	loadingGetProfile: false,
	loadingUpdateProfile: false,
}

const profile = (state = initialState, action) => {
	switch (action.type) {
		case Profile.REQUEST_GET_PROFILE:
			return { ...state, loadingGetProfile: true }
		case Profile.GET_PROFILE:
			return {
				...state,
				loadingGetProfile: false,
				profile: action.payload.data,
				isInitialized: true,
			}
		case Profile.REQUEST_UPDATE_PROFILE:
			return { ...state, loadingUpdateProfile: true }
		case Profile.UPDATE_PROFILE:
			successToastify('Profile updated successfully!!!')
			return {
				...state,
				profile: action.payload.data,
				loadingUpdateProfile: false,
			}
		case Profile.PROFILE_ERROR:
			failToastify(action.payload.err)
			clearStorage()
			return { ...state, loadingGetProfile: false, loadingUpdateProfile: false }
		default:
			return state
	}
}

export default profile
