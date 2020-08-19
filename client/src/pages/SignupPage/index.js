import React from 'react'
import { Tab } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { isAuthenticated } from 'utils'

import Header from 'components/HeaderPage'
import Footer from 'components/FooterPage'
import FormSignupCompany from 'pages/SignupPage/containers/FormSignupCompany'
import FormSignupIndividual from 'pages/SignupPage/containers/FormSignupIndividual'

import './style.scss'

const SignupPage = () => {
	const uid = useSelector((state) => state.auth.uid)
	const panes = [
		{ menuItem: 'COMPANY SIGN UP', render: () => <FormSignupCompany /> },
		{ menuItem: 'INDIVIDUAL SIGN UP', render: () => <FormSignupIndividual /> },
	]

	if (uid || isAuthenticated()) {
		return <Redirect to='/profile' />
	}

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
