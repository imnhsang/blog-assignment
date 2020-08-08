import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// import PrivateRoute from './PrivateRoute'
import Home from 'pages/HomePage'

function App() {
	return (
		<Router>
			<Switch>
				{/* <PrivateRoute exact path='/' component={Home}></PrivateRoute> */}
				{/* <Route exact path='/login' component></Route> */}

				<Route exact path='*' component={Home}></Route>
			</Switch>
		</Router>
	)
}

export default App
