import { v4 as uuidv4 } from 'uuid'

import {
	requestGetListBlogByCategory,
	getListBlogByCategory,
	requestPostBlog,
	postBlog,
	failRequestBlog,
} from '../actions/blog'
import api from '../../api'
import { isSuccess } from 'helpers'
import fire from 'config/fire'
import { getUIDFromStorage } from 'utils'
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

export const createBlog = (coverFile, createBlogData) => async (dispatch) => {
	try {
		dispatch(requestPostBlog())

		let urlCover = ''

		if (coverFile) {
			const refCover = 'blogs/' + uuidv4()

			await fire.storage().ref(refCover).put(coverFile)

			urlCover = await fire.storage().ref(refCover).getDownloadURL()
		}

		const body = {
			uid: getUIDFromStorage(),
			title: createBlogData.title,
			category: createBlogData.category,
			created_at: Date.now(),
			cover: urlCover,
		}

		const res = await api.post('/blogs/create-blog', body)
		if (isSuccess(res)) {
			dispatch(postBlog(body))
			return true
		} else {
			const { errors } = res.data
			dispatch(failRequestBlog(errors[0].msg))
			return false
		}
	} catch (error) {
		console.log(error)
		dispatch(failRequestBlog(error.response.data.errors[0].msg))
		return false
	}
}
