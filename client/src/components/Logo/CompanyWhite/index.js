import React from 'react'

import './style.scss'

function IconLogoCompany({ type }) {
	return (
		<>
			{type === 'blue' ? (
				<div className='logo-company blue'>
					<span>lorem 4</span>
					<span>skill</span>
				</div>
			) : (
				<div className='logo-company white'>
					<span>lorem 4</span>
					<span>skill</span>
				</div>
			)}
		</>
	)
}

export default IconLogoCompany
