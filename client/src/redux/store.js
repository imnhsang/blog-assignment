import { combineReducers } from 'redux'
import auth from 'redux/reducers/auth'
import user from 'redux/reducers/user'
import category from 'redux/reducers/category'

const appReducer = combineReducers({
	auth,
	user,
	category,
})

const rootReducer = (state, action) => {
	if (action.type === 'SIGNOUT_SUCCESS') {
		state = undefined
	}

	return appReducer(state, action)
}

export default rootReducer
