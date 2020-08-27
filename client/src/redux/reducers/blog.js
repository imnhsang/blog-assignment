import { Blog } from '../../constants/actionTypes'
import { failToastify, successToastify } from 'helpers'

const initialState = {
	listBlogByCategory: {},
	loadingGetBlogByCategory: false,
	loadingCreateBlog: false,
	loadingUpdateBlog: false,
	loadingDeleteBlog: false,
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
		case Blog.UPDATE_BLOG: {
			successToastify('Blog edited successfully!!!')

			const index = state.listBlogByCategory[
				action.payload.blog.category
			].data.findIndex((e) => e.id === action.payload.blog.id)

			const data = state.listBlogByCategory[
				action.payload.blog.category
			].data.filter((e) => e.id !== action.payload.blog.id)
			data.splice(index, 0, action.payload.blog)

			return {
				...state,
				loadingUpdateBlog: false,
				listBlogByCategory: {
					...state.listBlogByCategory,
					[action.payload.blog.category]: {
						...state.listBlogByCategory[action.payload.blog.category],
						data,
					},
				},
			}
		}
		case Blog.REQUEST_DELETE_BLOG:
			return { ...state }
		case Blog.DELETE_BLOG:
      successToastify('Blog deleted successfully!!!')
			return {
				...state,
				listBlogByCategory: {
					...state.listBlogByCategory,
					[action.payload.blog.category]: {
						...state.listBlogByCategory[action.payload.blog.category],
						data: state.listBlogByCategory[
							action.payload.blog.category
						].data.filter((e) => e.id !== action.payload.blog.id),
					},
				},
			}
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
