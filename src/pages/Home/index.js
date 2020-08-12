import React from 'react'

import WelcomeArea from 'pages/Home/containers/WelcomeCompany'
import PartnerArea from 'pages/Home/containers/PartnerCompany'
import ServiceArea from 'pages/Home/containers/ServiceCompany'
import QuoteArea from 'pages/Home/containers/QuoteCompany'
import CategoryTrainerArea from 'pages/Home/containers/CategoryTrainer'
import ProcessArea from 'pages/Home/containers/ProcessWork'
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
			<CreateAccountArea />
			<Footer />
		</div>
	)
}

export default HomePage
