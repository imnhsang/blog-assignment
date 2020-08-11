import React, { useState } from 'react'
import { Icon } from 'semantic-ui-react'

import './style.scss'

const SelectDefault = ({ value, placeholder, data, handleOnChange }) => {
	const [focus, setFocus] = useState(false)
	return (
		<div className='select-default'>
			<div className='angle-down'>
				<Icon name='angle down' />
			</div>
			<select
				className={`${focus ? 'focus-select' : ''} ${value ? 'selected' : ''}`}
				onFocus={() => setFocus(true)}
				onBlur={() => setFocus(false)}
				onChange={handleOnChange}
			>
				<option>{placeholder}</option>
				{data.map((e, inx) => (
					<option key={inx}>{e}</option>
				))}
			</select>
		</div>
	)
}

export default SelectDefault
