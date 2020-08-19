import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { connect, useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import PrivateRoute from './PrivateRoute'
import { fetchAuthDataIfNeeded } from 'actions/auth'

import Home from 'pages/HomePage'
import Login from 'pages/SigninPage'
import Signup from 'pages/SignupPage'
import Profile from 'pages/ProfilePage'
import Blog from 'pages/BlogPage'
import BlogCategory from 'pages/BlogPage/BlogCategoryPage'
import BlogDetail from 'pages/BlogPage/BlogDetailPage'

function App({ onFetchAuthData }) {
	useEffect(() => {
		onFetchAuthData()
	}, [onFetchAuthData])

	const loading = useSelector((state) => state.auth.loadingAuth)

	return (
		<>
			<ToastContainer />
			{!loading && (
				<Router>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/login' component={Login} />
						<Route exact path='/signup' component={Signup} />
						<PrivateRoute exact path='/profile' component={Profile} />
						<Route exact path='/blog' component={Blog} />
						<Route exact path='/blog/category' component={BlogCategory} />
						<Route exact path='/blog/detail' component={BlogDetail} />
						<Route exact path='*' component={Home} />
					</Switch>
				</Router>
			)}
		</>
	)
}

const mapDispatchToProps = (dispatch) => ({
	onFetchAuthData: () => dispatch(fetchAuthDataIfNeeded()),
})

export default connect(null, mapDispatchToProps)(App)
