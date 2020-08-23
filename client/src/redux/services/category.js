import {
	requestCategory,
	getListCategory,
	failRequestCategory,
} from '../actions/category'
import api from 'api'
import { isSuccess } from 'helpers'

const fetchListCategory = () => async (dispatch) => {
	try {
		dispatch(requestCategory())

		const res = await api.get('/categories')

		if (isSuccess(res)) {
			const { data } = res
			dispatch(getListCategory(data.data))
		} else {
			const { errors } = res.data
			dispatch(failRequestCategory(errors[0].msg))
		}
	} catch (error) {
		// dispatch(responseCategoryDataFail(error.response.data.errors[0].msg))
	}
}

const shouldFetchListCategory = (state) => {
	const { isInitialized } = state
	return !isInitialized
}

export const fetchListCategoryIfNeeded = () => (dispatch, getState) => {
	if (shouldFetchListCategory(getState().category)) {
		return dispatch(fetchListCategory())
	}
	return true
}
