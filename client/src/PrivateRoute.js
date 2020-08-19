import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRoute = ({ component: Component, ...rest }) => {
	const uid = useSelector((state) => state.auth.uid)
	return (
		<Route
			{...rest}
			render={(props) =>
				uid ? (
					<Component {...props} />
				) : (
					<Redirect
						to={{ pathname: '/login', state: { from: props.location } }}
					/>
				)
			}
		/>
	)
}

export default PrivateRoute
