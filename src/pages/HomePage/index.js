import React from 'react'

import WelcomeArea from 'pages/HomePage/containers/WelcomeCompany'
import PartnerArea from 'pages/HomePage/containers/PartnerCompany'
import ServiceArea from 'pages/HomePage/containers/ServiceCompany'
import QuoteArea from 'pages/HomePage/containers/QuoteCompany'
import CategoryTrainerArea from 'pages/HomePage/containers/CategoryTrainer'
import ProcessArea from 'pages/HomePage/containers/ProcessWork'
import CreateAccountArea from 'containers/CreateAccount'
import Header from 'components/HeaderPage'
import Footer from 'components/FooterPage'

function HomePage() {
	return (
		<div>
			<Header type='guess' />
			<WelcomeArea />
			<PartnerArea />
			<ServiceArea />
			<QuoteArea />
			<CategoryTrainerArea />
			<ProcessArea />
			<CreateAccountArea
				title='	START HIRING BEST-IN-CLASS CORPORATE TRAINERS WITH LOREM4SKILL'
				subcription='	Create your free account in minutes and access a network of top
				trainers.'
				name='SIGN UP WITH LOREM4SKILL'
			/>
			<Footer />
		</div>
	)
}

export default HomePage
