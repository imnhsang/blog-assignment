import { toast } from 'react-toastify'

import { User } from '../../constants/actionTypes'

const initialState = {
	user: null,
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

const user = (state = initialState, action) => {
	switch (action.type) {
		case User.REQUEST_USER_DATA:
			return { ...state, loading: true }
		case User.RECEIVE_USER_DATA:
			return {
				...state,
				loading: false,
				user: action.payload.user,
				isInitialized: true,
			}
		case User.RESPONSE_USER_DATA_FAIL:
			failToastify(action.payload.err)
			return { ...state, loading: false }
		default:
			return state
	}
}

export default user
