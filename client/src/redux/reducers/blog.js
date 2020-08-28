import { Blog } from '../../constants/actionTypes'
import { failToastify, successToastify } from 'helpers'

const initialState = {
	listBlog: {},
	listBlogByCategory: {},
	loadingGetBlog: false,
	loadingGetBlogByCategory: false,
	loadingCreateBlog: false,
	loadingUpdateBlog: false,
	loadingDeleteBlog: false,
}

const blog = (state = initialState, action) => {
	switch (action.type) {
		case Blog.REQUEST_GET_LIST_BLOG:
			return { ...state, loadingGetBlog: true }
		case Blog.GET_LIST_BLOG: {
			const { data, page, isLoadMore } = action.payload
			return {
				...state,
				loadingGetBlog: false,
				listBlog: {
					...state.listBlog,
					data,
					isInitialized: true,
					page,
					isLoadMore,
				},
			}
		}
		case Blog.REQUEST_GET_LIST_BLOG_BY_CATEGORY:
			return { ...state, loadingGetBlogByCategory: true }
		case Blog.GET_LIST_BLOG_BY_CATEGORY: {
			const { category, data, page, isLoadMore } = action.payload
			return {
				...state,
				loadingGetBlogByCategory: false,
				listBlogByCategory: {
					...state.listBlogByCategory,
					[category]: {
						isInitialized: true,
						data,
						page,
						isLoadMore,
					},
				},
			}
		}
		case Blog.REQUEST_POST_BLOG:
			return { ...state, loadingCreateBlog: true }
		case Blog.POST_BLOG: {
			successToastify('Blog posted successfully!!!')

			const { blog } = action.payload
			const { listBlogByCategory } = state

			if (listBlogByCategory[blog.category] !== undefined) {
				return {
					...state,
					loadingCreateBlog: false,
					listBlogByCategory: {
						...listBlogByCategory,
						[blog.category]: {
							...listBlogByCategory[blog.category],
							data: [blog, ...listBlogByCategory[blog.category].data],
						},
					},
				}
			} else {
				return {
					...state,
					loadingCreateBlog: false,
				}
			}
		}
		case Blog.REQUEST_UPDATE_BLOG:
			return { ...state, loadingUpdateBlog: true }
		case Blog.UPDATE_BLOG: {
			successToastify('Blog edited successfully!!!')

			const { listBlogByCategory } = state
			const { blog } = action.payload

			const index = listBlogByCategory[blog.category].data.findIndex(
				(e) => e.id === blog.id
			)

			const data = state.listBlogByCategory[blog.category].data.filter(
				(e) => e.id !== blog.id
			)
			data.splice(index, 0, blog)

			return {
				...state,
				loadingUpdateBlog: false,
				listBlogByCategory: {
					...listBlogByCategory,
					[blog.category]: {
						...listBlogByCategory[blog.category],
						data,
					},
				},
			}
		}
		case Blog.REQUEST_DELETE_BLOG:
			return { ...state }
		case Blog.DELETE_BLOG: {
			successToastify('Blog deleted successfully!!!')

			const { blog } = action.payload
			const { listBlogByCategory } = state
			return {
				...state,
				listBlogByCategory: {
					...listBlogByCategory,
					[blog.category]: {
						...listBlogByCategory[blog.category],
						data: listBlogByCategory[blog.category].data.filter(
							(e) => e.id !== blog.id
						),
					},
				},
			}
		}
		case Blog.BLOG_ERROR:
			failToastify(action.payload.err)
			return {
				...state,
				loadingGetBlog: false,
				loadingGetBlogByCategory: false,
				loadingCreateBlog: false,
				loadingUpdateBlog: false,
			}
		default:
			return { ...state }
	}
}

export default blog
