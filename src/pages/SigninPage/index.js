import React from 'react'

import Header from 'components/HeaderPage'
import Footer from 'components/FooterPage'
import FormSignin from 'pages/SigninPage/containers/FormSignin'

import './style.scss'
import 'assets/stylesheets/global.scss'

const SigninPage = () => {
	return (
		<div className='signin-page'>
			<Header />
			<div
				className='d-flex justify-content-center align-items-center h-100'
				style={{ marginTop: '4.75rem' }}
			>
				<FormSignin />
			</div>
			<Footer />
		</div>
	)
}

export default SigninPage
