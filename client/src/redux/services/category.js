import {
	receiveCategoryData,
	requestCategoryData,
	responseCategoryDataFail,
} from '../actions/category'
import api from 'api'
import { isSuccess } from 'helpers'

const fetchListCategoryData = () => async (dispatch) => {
	try {
		dispatch(requestCategoryData())

		const res = await api.get('/categories')

		if (isSuccess(res)) {
			const { data } = res
			dispatch(receiveCategoryData(data.data))
		} else {
			const { errors } = res.data
			dispatch(responseCategoryDataFail(errors[0].msg))
		}
	} catch (error) {
		dispatch(responseCategoryDataFail(error.response.data.errors[0].msg))
	}
}

const shouldFetchListCategoryData = (state) => {
	const { isInitialized } = state
	return !isInitialized
}

export const fetchListCategoryDataIfNeeded = () => (dispatch, getState) => {
	if (shouldFetchListCategoryData(getState().category)) {
		return dispatch(fetchListCategoryData())
	}
	return true
}
