import React from 'react'
import { Icon } from 'semantic-ui-react'

import ButtonEngage from 'components/Button/Default'
import './style.scss'

const CoverProfile = ({ profile, onChangeSelectNewAvatar }) => {
	return (
		<div className='cover-profile'>
			<div className='cover-profile__avatar'>
				<img src={(profile && profile.avatar) || ''} alt='' />
				<label className='cover-profile__avatar__change-avatar'>
					<input
						name='change-avatar'
						type='file'
						onChange={onChangeSelectNewAvatar}
						accept='image/*'
						className='cover-profile__avatar__change-avatar'
					/>
					<Icon name='camera' />
				</label>
			</div>
			<div className='cover-profile__fullname'>
				<span>{profile && `${profile.firstname} ${profile.lastname}`}</span>
			</div>
			<div className='cover-profile__full-position'>
				<span>Public Speaking and Professional Stage Presence</span>
			</div>
			<ButtonEngage name='ENGAGE NOW' />
		</div>
	)
}

export default CoverProfile
