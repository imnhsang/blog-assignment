import { Category } from '../../constants/actionTypes'

export const requestListCategoryData = () => ({
	type: Category.REQUEST_LIST_CATEGORY_DATA,
})

export const receiveListCategoryData = (listCategory) => ({
	type: Category.RECEIVE_LIST_CATEGORY_DATA,
	payload: { listCategory },
})

export const responseListCategoryDataFail = () => ({
	type: Category.RESPONSE_LIST_CATEGORY_DATA_FAIL,
})
