import React from 'react'
import { connect } from 'react-redux'

import Header from 'components/HeaderPage'
import Footer from 'components/FooterPage'
import FormSignin from 'pages/SigninPage/containers/FormSignin'

import './style.scss'

import { loginWithEmailPassword } from 'redux/services/auth'

const SigninPage = ({ loginWithEmailPassword }) => {
	return (
		<>
			<div className='signin-page'>
				<Header />
				<div className='flex justify-center items-center h-full mt-475'>
					<FormSignin onLogin={loginWithEmailPassword} />
				</div>
				<Footer />
			</div>
		</>
	)
}

const actionCreators = {
	loginWithEmailPassword,
}

export default connect(null, actionCreators)(SigninPage)
