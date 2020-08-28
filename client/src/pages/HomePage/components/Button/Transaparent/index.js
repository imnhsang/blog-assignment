import React from 'react'
import { Button } from 'semantic-ui-react'

import './style.scss'

const ButtonTransparent = ({ text, onClick, fitWidth, disabled }) => {
	return (
		<Button
			className={`button-transparent ${fitWidth ? 'fit-width' : ''}`}
			onClick={onClick}
			disabled={disabled}
		>
			{text}
		</Button>
	)
}

export default ButtonTransparent
