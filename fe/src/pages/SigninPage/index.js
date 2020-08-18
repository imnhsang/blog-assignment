import React from 'react'
import { connect } from 'react-redux'

import Header from 'components/HeaderPage'
import Footer from 'components/FooterPage'
import FormSignin from 'pages/SigninPage/containers/FormSignin'

import './style.scss'

import { loginWithEmailPassword } from 'actions/auth'

const SigninPage = ({ onLogin }) => {
	return (
		<>
			<div className='signin-page'>
				<Header />
				<div className='flex justify-center items-center h-full mt-475'>
					<FormSignin onLogin={onLogin} />
				</div>
				<Footer />
			</div>
		</>
	)
}

const mapDispatchToProps = (dispatch) => ({
	onLogin: (email, password) =>
		dispatch(loginWithEmailPassword(email, password)),
})

export default connect(null, mapDispatchToProps)(SigninPage)
