import { toast } from 'react-toastify'

import { Profile } from '../../constants/actionTypes'
import { clearStorage } from 'utils'

const initialState = {
	profile: null,
	isInitialized: false,
	loading: false,
}

const failToastify = (err) =>
	toast.error(err, {
		position: 'top-right',
		autoClose: 3000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	})

const profile = (state = initialState, action) => {
	switch (action.type) {
		case Profile.REQUEST_PROFILE:
			return { ...state, loading: true }
		case Profile.GET_PROFILE:
			return {
				...state,
				loading: false,
				profile: action.payload.data,
				isInitialized: true,
			}
		case Profile.PROFILE_ERROR:
			failToastify(action.payload.err)
			clearStorage()
			return { ...state, loading: false }
		default:
			return state
	}
}

export default profile
