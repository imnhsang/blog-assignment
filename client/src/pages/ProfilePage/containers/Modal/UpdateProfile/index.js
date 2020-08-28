import React from 'react'
import { Icon, Modal } from 'semantic-ui-react'
import { useSelector } from 'react-redux'
import Input from 'components/Input/Default'
import Button from 'components/Button/Default'
import ButtonTransparent from 'pages/HomePage/components/Button/Transaparent'

import './style.scss'

const ModalUpdateProfile = ({
	profile,
	avatarFile,
	updateProfileData,
	handleSaveProfile,
	handleChangeAvatar,
	handleChangeText,
	handleShowModalProfile,
	openModalProfile,
}) => {
	const loading = useSelector((state) => state.profile.loadingUpdateProfile)
	return (
		<div className='modal-update-profile'>
			<Modal
				size='tiny'
				open={openModalProfile}
				// onClose={handleShowModalProfile}
			>
				<Modal.Content>
					<p className='modal-update-profile__title'>Edit your profile</p>
					<div className='modal-update-profile__form-profile'>
						<div className='modal-update-profile__form-profile__avatar'>
							<img
								src={
									avatarFile
										? URL.createObjectURL(avatarFile)
										: profile && profile.avatar
								}
								alt=''
							/>
							<label>
								<Icon name='camera' />
								<input
									type='file'
									name='avatar'
									onChange={handleChangeAvatar}
								/>
							</label>
						</div>
						<div className='modal-update-profile__form-profile__firstname'>
							<Input
								name='firstname'
								type='text'
								placeholder='First name'
								handleOnChange={handleChangeText}
								value={
									(JSON.stringify(updateProfileData) !== '{}' &&
										updateProfileData.firstname &&
										updateProfileData.firstname) ||
									(profile && profile.firstname)
								}
							/>
						</div>
						<div className='modal-update-profile__form-profile__lastname'>
							<Input
								name='lastname'
								type='text'
								placeholder='Last name'
								handleOnChange={handleChangeText}
								value={
									(JSON.stringify(updateProfileData) !== '{}' &&
										updateProfileData.lastname &&
										updateProfileData.lastname) ||
									(profile && profile.lastname)
								}
							/>
						</div>
						<div className='modal-update-profile__form-profile__actions'>
							<div className='p-05'>
								<ButtonTransparent
									onClick={handleShowModalProfile}
									text='CANCEL'
									fitWidth
									disabled={loading}
								/>
							</div>
							<div className='p-05'>
								<Button
									name='SAVE PROFILE'
									onClick={handleSaveProfile}
									loading={loading}
								/>
							</div>
						</div>
					</div>
				</Modal.Content>
			</Modal>
		</div>
	)
}

export default ModalUpdateProfile
