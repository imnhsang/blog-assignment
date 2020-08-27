import { Blog } from '../../constants/actionTypes'
import { failToastify, successToastify } from 'helpers'

const initialState = {
	listBlogByCategory: {},
	loadingGetBlogByCategory: false,
	loadingCreateBlog: false,
	loadingUpdateBlog: false,
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
						page: action.payload.page,
						isLoadMore: action.payload.isLoadMore,
					},
				},
			}
		case Blog.REQUEST_POST_BLOG:
			return { ...state, loadingCreateBlog: true }
		case Blog.POST_BLOG:
			successToastify('Blog posted successfully!!!')
			if (
				state.listBlogByCategory[action.payload.blog.category] !== undefined
			) {
				return {
					...state,
					loadingCreateBlog: false,
					listBlogByCategory: {
						...state.listBlogByCategory,
						[action.payload.blog.category]: {
							...state.listBlogByCategory[action.payload.blog.category],
							data: [
								action.payload.blog,
								...state.listBlogByCategory[action.payload.blog.category].data,
							],
						},
					},
				}
			} else {
				return {
					...state,
					loadingCreateBlog: false,
				}
			}
		case Blog.REQUEST_UPDATE_BLOG:
			return { ...state, loadingUpdateBlog: true }
		case Blog.UPDATE_BLOG:
			return { ...state, loadingUpdateBlog: false }
		case Blog.BLOG_ERROR:
			failToastify(action.payload.err)
			return {
				...state,
				loadingGetBlogByCategory: false,
				loadingCreateBlog: false,
				loadingUpdateBlog: false,
			}
		default:
			return { ...state }
	}
}

export default blog
