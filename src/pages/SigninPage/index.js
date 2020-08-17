import React from 'react'

import Header from 'components/HeaderPage'
import Footer from 'components/FooterPage'
import FormSignin from 'pages/SigninPage/containers/FormSignin'

import './style.scss'

const SigninPage = () => {
	return (
		<div className='signin-page'>
			<Header />
			<div className='flex justify-center items-center h-full mt-475'>
				<FormSignin />
			</div>
			<Footer />
		</div>
	)
}

export default SigninPage
