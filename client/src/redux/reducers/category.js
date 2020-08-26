import { Category } from '../../constants/actionTypes'
import { failToastify } from 'helpers'
const initialState = {
	listCategory: null,
	isInitialized: false,
	loading: false,
}

const category = (state = initialState, action) => {
	switch (action.type) {
		case Category.REQUEST_CATEGORY:
			return { ...state, loading: true }
		case Category.GET_LIST_CATEGORY:
			return {
				...state,
				isInitialized: true,
				listCategory: action.payload.data,
				loading: false,
			}
		case Category.CATEGORY_ERROR:
			failToastify(action.payload.err)
			return {
				...state,
				loading: false,
			}
		default:
			return state
	}
}

export default category
