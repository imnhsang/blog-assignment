import React from 'react'

import Button from 'components/Button/TransparentArrowRight'

import './style.scss'

const AreaCreateAccount = () => {
	return (
		<div className='area-create-account items-center flex-column row'>
			<p className='area-create-account__title text-center'>
				START HIRING BEST-IN-CLASS CORPORATE TRAINERS WITH LOREM4SKILL
			</p>
			<p className='area-create-account__subscription text-center'>
				Create your free account in minutes and access a network of top
				trainers.
			</p>
			<Button name='SIGN UP WITH LOREM4SKILL' />
		</div>
	)
}

export default AreaCreateAccount
