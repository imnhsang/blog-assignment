import React from 'react'

import './style.scss'

const CheckBoxDefault = ({ text, checked, name, handleOnChange, error }) => {
	return (
		<div className='checkbox-default'>
			<input
				type='checkbox'
				defaultChecked={checked}
				name={name}
				onChange={handleOnChange}
			/>
			<span className={`checkmark ${error ? 'error' : ''}`} />
			<label> {text}</label>
		</div>
	)
}

export default React.memo(CheckBoxDefault)
