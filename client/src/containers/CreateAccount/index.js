import React from 'react'

import Button from 'components/Button/TransparentArrowRight'

import './style.scss'

const AreaCreateAccount = ({ title, subcription, name }) => {
	return (
		<div className='area-create-account items-center flex-column row'>
			<p className='area-create-account__title text-center'>{title}</p>
			<p className='area-create-account__subscription text-center'>
				{subcription}
			</p>
			<Button name={name} />
		</div>
	)
}

export default AreaCreateAccount
