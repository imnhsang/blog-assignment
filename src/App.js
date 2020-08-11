import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// import PrivateRoute from './PrivateRoute'

import Home from 'pages/HomePage'
import Login from 'pages/SigninPage'
import Signup from 'pages/SignupPage'

function App() {
	return (
		<Router>
			<Switch>
				{/* <PrivateRoute exact path='/' component={Home}></PrivateRoute> */}
				<Route exact path='/' component={Home} />
				<Route exact path='/login' component={Login} />
				<Route exact path='/signup' component={Signup} />
			</Switch>
		</Router>
	)
}

export default App
