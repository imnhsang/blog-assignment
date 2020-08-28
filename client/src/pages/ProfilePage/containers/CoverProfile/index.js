import React from 'react'
import { Icon } from 'semantic-ui-react'

import ButtonEngage from 'components/Button/Default'
import './style.scss'

const CoverProfile = ({
	profile,
	handleShowModalProfile,
	openModalProfile,
  loading,
}) => {
	return (
		<div className='cover-profile'>
			<div className='cover-profile__avatar'>
				<img src={(profile && profile.avatar) || ''} alt='' />
			</div>
			<div className='cover-profile__fullname'>
				<span>{profile && `${profile.firstname} ${profile.lastname}`}</span>
			</div>
			<div className='cover-profile__full-position'>
				<span>Public Speaking and Professional Stage Presence</span>
			</div>
			<ButtonEngage name='ENGAGE NOW' />
			{!openModalProfile && !loading && (
				<div
					className='cover-profile__action-profile'
					onClick={handleShowModalProfile}
				>
					<Icon name='pencil' /> <span>Edit Profile</span>
				</div>
			)}
		</div>
	)
}

export default CoverProfile
