import React from 'react'
import { Button } from 'semantic-ui-react'

import './style.scss'

const ButtonTransparent = ({ text, onClick }) => {
	return (
		<Button className='button-transparent' onClick={onClick}>
			{text}
		</Button>
	)
}

export default ButtonTransparent
