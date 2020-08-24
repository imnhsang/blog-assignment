import React from 'react'
import { Button } from 'semantic-ui-react'

import './style.scss'

const ButtonTransparent = ({ text, onClick, fitWidth }) => {
	return (
		<Button
			className={`button-transparent ${fitWidth ? 'fit-width' : ''}`}
			onClick={onClick}
		>
			{text}
		</Button>
	)
}

export default ButtonTransparent
