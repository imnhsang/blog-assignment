import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRoute = ({ uid, component: Component, ...rest }) => {
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

const mapStateToProps = (state) => {
	return {
		uid: state.auth.uid,
	}
}

export default connect(mapStateToProps)(PrivateRoute)
