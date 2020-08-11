import React from 'react'

import './style.scss'

const CheckBoxDefault = ({ text, checked }) => {
	return (
		<div className='checkbox-default'>
			<input type='checkbox' defaultChecked={checked} />
			<span className='checkmark' />
			<label> {text}</label>
		</div>
	)
}

export default React.memo(CheckBoxDefault)
