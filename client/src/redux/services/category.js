import {
	receiveListCategoryData,
	requestListCategoryData,
	responseListCategoryDataFail,
} from '../actions/category'
import api from 'api'
import { isSuccess } from 'helpers'

const fetchListCategoryData = () => async (dispatch) => {
	try {
		dispatch(requestListCategoryData())

		const res = await api.get('/categories')

		if (isSuccess(res)) {
			const { data } = res
			dispatch(receiveListCategoryData(data.data))
		} else {
			const { errors } = res.data
			dispatch(responseListCategoryDataFail(errors[0].msg))
		}
	} catch (error) {
		dispatch(responseListCategoryDataFail(error.response.data.errors[0].msg))
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
