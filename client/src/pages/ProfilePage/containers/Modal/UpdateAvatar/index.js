import React from 'react'

import Button from 'components/Button/Default'
import ButtonTransparent from 'pages/HomePage/components/Button/Transaparent'

import './style.scss'

const ModalUpdateAvatar = ({ urlNewAvatar, onCloseModal,onSave }) => {
	return (
		<div className='modal-update-avatar'>
			<img
				src={urlNewAvatar && URL.createObjectURL(urlNewAvatar)}
				alt=''
				className='modal-update-avatar__avatar'
			/>
			<div className='modal-update-avatar__actions flex'>
				<div className='p-05 pb-0'>
					<ButtonTransparent text='CANCEL' onClick={onCloseModal} />
				</div>
				<div className='p-05 pb-0'>
					<Button name='SAVE' onClick={onSave}/>
				</div>
			</div>
		</div>
	)
}

export default ModalUpdateAvatar
