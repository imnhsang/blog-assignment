import React, { useState } from 'react'

import './style.scss'

const InputDefault = ({ placeholder, value, error, handleOnChange, type }) => {
	const [focus, setFocus] = useState(false)
	return (
		<div className={`input-default ${focus || value ? 'focus-input' : ''}`}>
			<p className={`${error && value ? 'error' : ''}`}>
				{error && value ? error : placeholder}
			</p>
			<input
				className={`${focus ? 'focus-input' : ''}`}
				onFocus={() => setFocus(true)}
				onBlur={() => setFocus(false)}
				onChange={handleOnChange}
				type={type}
				placeholder={!focus ? placeholder : ''}
			/>
		</div>
	)
}

export default InputDefault
