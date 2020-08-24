import React from 'react'
import { Icon } from 'semantic-ui-react'

import Input from 'components/Input/Default'
import Button from 'components/Button/Default'
import ButtonTransparent from 'pages/HomePage/components/Button/Transaparent'

import './style.scss'

const ModalUpdateProfile = ({
	profile,
	updateProfile,
	handleSaveProfile,
	handleChangeAvatar,
}) => {
	return (
		<div className='modal-update-profile'>
			<p className='modal-update-profile__title'>Edit your profile</p>
			<div className='modal-update-profile__form-profile'>
				<div className='modal-update-profile__form-profile__avatar'>
					<img
						src={
							updateProfile.avatar
								? URL.createObjectURL(updateProfile.avatar)
								: profile && profile.avatar
						}
						alt=''
					/>
					<label>
						<Icon name='camera' />
						<input type='file' name='avatar' onChange={handleChangeAvatar} />
					</label>
				</div>
				<div className='modal-update-profile__form-profile__firstname'>
					<Input type='text' placeholder='Full name' />
				</div>
				<div className='modal-update-profile__form-profile__lastname'>
					<Input type='text' placeholder='Last name' />
				</div>
				<div className='modal-update-profile__form-profile__actions'>
					<div className='p-05'>
						<ButtonTransparent text='CANCEL' fitWidth />
					</div>
					<div className='p-05'>
						<Button name='SAVE PROFILE' onClick={handleSaveProfile} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default ModalUpdateProfile
