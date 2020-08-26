import { Blog } from '../../constants/actionTypes'

const initialState = {
	listBlogByCategory: {},
	loadingGetBlogByCategory: false,
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
		case Blog.BLOG_ERROR:
			return {
				...state,
				loadingGetBlogByCategory: false,
			}

		default:
			return { ...state }
	}
}

export default blog
