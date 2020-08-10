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

function Home() {
	return (
		<div>
			<Header type='guess' />
			<WelcomeArea />
			<PartnerArea />
			<ServiceArea />
			<QuoteArea />
			<CategoryTrainerArea />
			<ProcessArea />
			<CreateAccountArea />
			<Footer />
		</div>
	)
}

export default Home
