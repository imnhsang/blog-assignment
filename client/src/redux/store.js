import { combineReducers } from 'redux'
import auth from 'redux/reducers/auth'
import profile from 'redux/reducers/profile'
import category from 'redux/reducers/category'
import blog from 'redux/reducers/blog'

const appReducer = combineReducers({
	auth,
	profile,
	category,
	blog,
})

const rootReducer = (state, action) => {
	if (action.type === 'SIGNOUT_SUCCESS') {
		state = undefined
	}

	return appReducer(state, action)
}

export default rootReducer
