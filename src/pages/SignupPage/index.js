import React from 'react'
import { Tab } from 'semantic-ui-react'

import Header from 'components/HeaderPage'
import Footer from 'components/FooterPage'
import FormSignupCompany from 'pages/SignupPage/containers/FormSignupCompany'
import FormSignupIndividual from 'pages/SignupPage/containers/FormSignupIndividual'

import './style.scss'
import 'assets/stylesheets/global.scss'

const SignupPage = () => {
	const panes = [
		{ menuItem: 'COMPANY SIGN UP', render: () => <FormSignupCompany /> },
		{ menuItem: 'INDIVIDUAL SIGN UP', render: () => <FormSignupIndividual /> },
	]
	return (
		<div className='signup-page'>
			<Header />
			<div className='d-flex justify-content-center align-items-center flex-direction-column h-100 mt-475'>
				<div className='form-signup'>
					<h1 className='form-signup__title'>Create a Free Provider Account</h1>
					<Tab panes={panes} />
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default SignupPage
