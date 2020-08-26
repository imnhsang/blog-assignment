import { Blog } from '../../constants/actionTypes'
import { failToastify, successToastify } from 'helpers'

const initialState = {
	listBlogByCategory: {},
	loadingGetBlogByCategory: false,
	loadingCreateBlog: false,
}

const blog = (state = initialState, action) => {
	switch (action.type) {
		case Blog.REQUEST_GET_LIST_BLOG_BY_CATEGORY:
			return { ...state, loadingGetBlogByCategory: true }
		case Blog.GET_LIST_BLOG_BY_CATEGORY:
			return {
				...state,
				loadingGetBlogByCategory: false,
				listBlogByCategory: {
					...state.listBlogByCategory,
					[action.payload.category]: {
						isInitialized: true,
						data: action.payload.data,
					},
				},
			}
		case Blog.REQUEST_POST_BLOG:
			return { ...state, loadingCreateBlog: true }
		case Blog.POST_BLOG:
			successToastify('Blog posted successfully!!!')
			// const { blog } = action.payload
			return {
				...state,
				loadingCreateBlog: false,
				listBlogByCategory: {
					...state.listBlogByCategory,
					[action.payload.blog.category]: {
						...state.listBlogByCategory[action.payload.blog.category],
						data: [
							...state.listBlogByCategory[action.payload.blog.category].data,
							action.payload.blog,
						],
					},
				},
			}
		case Blog.BLOG_ERROR:
			failToastify(action.payload.err)
			return {
				...state,
				loadingGetBlogByCategory: false,
				loadingCreateBlog: false,
			}
		default:
			return { ...state }
	}
}

export default blog
