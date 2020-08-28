import { Blog } from '../../constants/actionTypes'

export const requestGetListBlog = () => ({
	type: Blog.REQUEST_GET_LIST_BLOG,
})

export const getListBlog = (data, page, isLoadMore) => ({
	type: Blog.GET_LIST_BLOG,
	payload: { data, page, isLoadMore },
})

export const requestGetListBlogByCategory = () => ({
	type: Blog.REQUEST_GET_LIST_BLOG_BY_CATEGORY,
})

export const getListBlogByCategory = (category, data, page, isLoadMore) => ({
	type: Blog.GET_LIST_BLOG_BY_CATEGORY,
	payload: { category, data, page, isLoadMore },
})

export const requestPostBlog = () => ({
	type: Blog.REQUEST_POST_BLOG,
})

export const postBlog = (blog) => ({
	type: Blog.POST_BLOG,
	payload: { blog },
})

export const requestUpdateBlog = () => ({
	type: Blog.REQUEST_UPDATE_BLOG,
})

export const updateBlog = (blog) => ({
	type: Blog.UPDATE_BLOG,
	payload: { blog },
})

export const requestDeleteBlog = () => ({
	type: Blog.REQUEST_DELETE_BLOG,
})

export const deleteBlog = (blog) => {
	return {
		type: Blog.DELETE_BLOG,
		payload: { blog },
	}
}

export const failRequestBlog = (err) => ({
	type: Blog.BLOG_ERROR,
	payload: { err },
})
