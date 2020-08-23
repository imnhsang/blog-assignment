import { Category } from '../../constants/actionTypes'

const initialState = {
	listCategory: null,
	isInitialized: false,
	loading: false,
}

const category = (state = initialState, action) => {
	switch (action.type) {
		case Category.REQUEST_LIST_CATEGORY_DATA:
			return { ...state, loading: true }
		case Category.RECEIVE_LIST_CATEGORY_DATA:
			return {
				...state,
				isInitialized: true,
				listCategory: action.payload.listCategory,
				loading: false,
			}
		case Category.RESPONSE_LIST_CATEGORY_DATA_FAIL:
			return {
				...state,
				loading: false,
			}
		default:
			return state
	}
}

export default category
