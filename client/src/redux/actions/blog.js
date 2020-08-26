import { Blog } from '../../constants/actionTypes'

export const requestGetListBlogByCategory = () => ({
	type: Blog.REQUEST_GET_LIST_BLOG_BY_CATEGORY,
})

export const getListBlogByCategory = (category, data) => ({
	type: Blog.GET_LIST_BLOG_BY_CATEGORY,
	payload: { category, data },
})

export const failRequestBlog = (err) => ({
	type: Blog.BLOG_ERROR,
	payload: { err },
})
