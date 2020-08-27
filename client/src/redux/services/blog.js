import { v4 as uuidv4 } from 'uuid'

import {
	requestGetListBlogByCategory,
	getListBlogByCategory,
	requestPostBlog,
	postBlog,
	requestUpdateBlog,
	updateBlog,
	requestDeleteBlog,
	deleteBlog,
	failRequestBlog,
} from '../actions/blog'
import api from '../../api'
import { isSuccess } from 'helpers'
import fire from 'config/fire'
import { getUIDFromStorage } from 'utils'

export const fetchListBlogByCategory = (category) => async (
	dispatch,
	getState
) => {
	try {
		dispatch(requestGetListBlogByCategory())
		const page =
			JSON.stringify(getState().blog.listBlogByCategory) === '{}'
				? 0
				: !getState().blog.listBlogByCategory[category]
				? 0
				: getState().blog.listBlogByCategory[category].page

		const res = await api.get(`/blogs/list-blog/${category}/${page + 1}`)
		if (isSuccess(res)) {
			const { data } = res
			dispatch(
				getListBlogByCategory(
					category,
					data.data.listBlog,
					page + 1,
					data.data.isLoadMore
				)
			)
		} else {
			const { errors } = res.data
			dispatch(failRequestBlog(errors[0].msg))
		}
	} catch (error) {
		dispatch(failRequestBlog('Something wrong happened ...'))
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
		return dispatch(fetchListBlogByCategory(category, getState().blog))
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
			const { data } = res
			dispatch(postBlog(data.data))
			return true
		} else {
			const { errors } = res.data
			dispatch(failRequestBlog(errors[0].msg))
			return false
		}
	} catch (error) {
		dispatch(failRequestBlog('Something wrong happened ...'))
		return false
	}
}

export const editBlog = (coverFile, editBlogData) => async (dispatch) => {
	try {
		dispatch(requestUpdateBlog())

		let urlCover = ''

		if (coverFile) {
			const refCover = 'blogs/' + uuidv4()

			await fire.storage().ref(refCover).put(coverFile)

			urlCover = await fire.storage().ref(refCover).getDownloadURL()
		}

		const body = {
			id: editBlogData.id,
			uid: getUIDFromStorage(),
			title: editBlogData.title,
			category: editBlogData.category,
			created_at: parseInt(editBlogData.created_at),
			cover: urlCover || editBlogData.cover,
		}

		const res = await api.post('/blogs/edit-blog', body)
		if (isSuccess(res)) {
			const { data } = res
			dispatch(updateBlog(data.data))
			return true
		} else {
			const { errors } = res.data
			dispatch(failRequestBlog(errors[0].msg))
			return false
		}
	} catch (error) {
		dispatch(failRequestBlog('Something wrong happened ...'))
		return false
	}
}

export const removeBlog = (blog) => async (dispatch) => {
	try {
		dispatch(requestDeleteBlog())

		const body = {
			id: blog.id,
		}

		const res = await api.post('/blogs/remove-blog', body)
		if (isSuccess(res)) {
			dispatch(deleteBlog(blog))
			return true
		} else {
			const { errors } = res.data
			dispatch(failRequestBlog(errors[0].msg))
			return false
		}
	} catch (error) {
		dispatch(failRequestBlog('Something wrong happened ...'))
		return false
	}
}
