import React from 'react'

import './style.scss'

const CheckBoxDefault = () => {
	return (
		<div className='checkbox-default'>
			<input type='checkbox' name='remember-me' />
			<span className='checkmark' />
			<label htmlFor='remember-me'> Remember me</label>
		</div>
	)
}

export default CheckBoxDefault
