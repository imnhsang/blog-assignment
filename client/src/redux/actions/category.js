import { Category } from '../../constants/actionTypes'

export const requestCategory = () => ({
	type: Category.REQUEST_CATEGORY,
})

export const getListCategory = (data) => ({
	type: Category.GET_LIST_CATEGORY,
	payload: { data },
})

export const failRequestCategory = (err) => ({
	type: Category.CATEGORY_ERROR,
	payload: { err },
})
