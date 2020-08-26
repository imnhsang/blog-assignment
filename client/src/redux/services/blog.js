import {
	requestGetListBlogByCategory,
	getListBlogByCategory,
	failRequestBlog,
} from '../actions/blog'
import api from '../../api'
import { isSuccess } from 'helpers'

const fetchListBlogByCategory = (category) => async (dispatch) => {
	try {
		dispatch(requestGetListBlogByCategory())
		const res = await api.get(`/blogs/list-blog/${category}`)
		if (isSuccess(res)) {
			const { data } = res
			dispatch(getListBlogByCategory(category, data.data))
		} else {
			const { errors } = res.data
			dispatch(failRequestBlog(errors[0].msg))
		}
	} catch (error) {
		dispatch(failRequestBlog(error.response.data.errors[0].msg))
	}
}

const shouldFetchListBlogByCategory = (state, category) => {
	const { isInitialized } = state.listBlogByCategory[category] || false
	return !isInitialized
}

export const fetchListBlogByCategoryIfNeeded = (category) => (
	dispatch,
	getState
) => {
	if (shouldFetchListBlogByCategory(getState().blog, category)) {
		return dispatch(fetchListBlogByCategory(category))
	}
	return true
}
