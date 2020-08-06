import React from 'react'

import Button from 'components/common/presentational/Button.Transparent.ArrowRight'

import './Area.CreateAccount.scss'

const AreaCreateAccount = () => {
	return (
		<div className='area-create-account align-items-center flex-direction-column row'>
			<p className='title text-align-center'>
				START HIRING BEST-IN-CLASS CORPORATE TRAINERS WITH LOREM4SKILL
			</p>
			<p className='subscription text-align-center'>
				Create your free account in minutes and access a network of top
				trainers.
			</p>
			<Button name='SIGN UP WITH LOREM4SKILL' />
		</div>
	)
}

export default AreaCreateAccount
