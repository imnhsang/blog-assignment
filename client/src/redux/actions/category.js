import { Category } from '../../constants/actionTypes'

export const requestCategoryData = () => ({
	type: Category.REQUEST_LIST_CATEGORY_DATA,
})

export const receiveCategoryData = (listCategory) => ({
	type: Category.RECEIVE_LIST_CATEGORY_DATA,
	payload: { listCategory },
})

export const responseCategoryDataFail = () => ({
	type: Category.RESPONSE_LIST_CATEGORY_DATA_FAIL,
})
