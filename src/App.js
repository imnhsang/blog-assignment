import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// import PrivateRoute from './PrivateRoute'

import Home from 'pages/Home'
import Login from 'pages/Signin'
import Signup from 'pages/Signup'
import Profile from 'pages/Profile'
import Blog from 'pages/Blog'
import BlogCategory from 'pages/BlogCategory'
import BlogDetail from 'pages/BlogDetail'

function App() {
	return (
		<Router>
			<Switch>
				{/* <PrivateRoute exact path='/' component={Home}></PrivateRoute> */}
				<Route exact path='/' component={Home} />
				<Route exact path='/login' component={Login} />
				<Route exact path='/signup' component={Signup} />
				<Route exact path='/profile' component={Profile} />
				<Route exact path='/blog' component={Blog} />
				<Route exact path='/blog/category' component={BlogCategory} />
				<Route exact path='/blog/detail' component={BlogDetail} />
			</Switch>
		</Router>
	)
}

export default App
