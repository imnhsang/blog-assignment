import React from 'react'
import { Tab } from 'semantic-ui-react'

import Header from 'components/HeaderPage'
import Footer from 'components/FooterPage'
import FormSignupCompany from 'pages/Signup/containers/FormSignupCompany'
import FormSignupIndividual from 'pages/Signup/containers/FormSignupIndividual'

import './style.scss'

const SignupPage = () => {
	const panes = [
		{ menuItem: 'COMPANY SIGN UP', render: () => <FormSignupCompany /> },
		{ menuItem: 'INDIVIDUAL SIGN UP', render: () => <FormSignupIndividual /> },
	]
	return (
		<div className='signup-page'>
			<Header />
			<div className='flex justify-center items-center flex-column h-full mt-475'>
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
