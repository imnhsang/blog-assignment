import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import PrivateRoute from './PrivateRoute'

import Home from 'pages/HomePage'
import Login from 'pages/SigninPage'
import Signup from 'pages/SignupPage'
import Profile from 'pages/ProfilePage'
import Blog from 'pages/BlogPage'
import BlogCategory from 'pages/BlogPage/BlogCategoryPage'
import BlogDetail from 'pages/BlogPage/BlogDetailPage'

function App() {
	return (
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
	)
}

export default App
