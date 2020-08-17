import React from 'react'

import ButtonEngage from 'components/Button/Default'

import './style.scss'

const CoverProfile = () => {
	return (
		<div className='cover-profile'>
			<div className='cover-profile__avatar'></div>
			<div className='cover-profile__fullname'>
				<span>Leo Nguyen</span>
			</div>
			<div className='cover-profile__full-position'>
				<span>Public Speaking and Professional Stage Presence</span>
			</div>
			<ButtonEngage name='ENGAGE NOW' />
		</div>
	)
}

export default CoverProfile
