import React, { useState } from 'react'

import './style.scss'

const InputDefault = ({
	name,
	placeholder,
	value,
	error,
  handleOnChange,
  onKeyDown,
	type,
}) => {
	const [focus, setFocus] = useState(false)
	return (
		<div className={`input-default ${focus || value ? 'focus-input' : ''}`}>
			<p className={`${error && value ? 'error' : ''}`}>
				{error && value ? error : placeholder}
			</p>
			<input
				name={name}
				className={`${focus ? 'focus-input' : ''}`}
				onFocus={() => setFocus(true)}
				onBlur={() => setFocus(false)}
				onChange={handleOnChange}
				type={type}
				placeholder={!focus ? placeholder : ''}
				onKeyDown={onKeyDown}
			/>
		</div>
	)
}

export default React.memo(InputDefault)
