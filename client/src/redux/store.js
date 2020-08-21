import { combineReducers } from 'redux'
import auth from 'redux/reducers/auth'
import user from 'redux/reducers/user'

const appReducer = combineReducers({
	auth,
	user,
})

const rootReducer = (state, action) => {
	if (action.type === 'SIGNOUT_SUCCESS') {
		state = undefined
  }
  
	return appReducer(state, action)
}

export default rootReducer
