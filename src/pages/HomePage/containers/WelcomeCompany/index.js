import React from 'react'

import Button from 'components/Button/ArrowRight'

import './style.scss'

import welcomeBackground from 'assets/images/background/home_welcome.jpg'

const WelcomeCompany = () => {
	return (
		<div
			className='area-welcome'
			style={{ backgroundImage: `url(${welcomeBackground})` }}
		>
			<div className='area-welcome--content'>
				<p className='area-welcome--content--title'>Hire the Best Corporate Trainer or Coach for Your Business</p>
				<p className='area-welcome--content--subscription'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, iusto minima. Veritatis molestiae architecto autem nihil ab dolores blanditiis doloribus.
				</p>
				<Button name='FIND BEST TRAINER'/>
			</div>
		</div>
	)
}

export default WelcomeCompany
