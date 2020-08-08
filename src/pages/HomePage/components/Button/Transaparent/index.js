import React from 'react'
import { Button } from 'semantic-ui-react'

import './style.scss'

const ButtonTransparent = ({ text }) => {
	return (
		<Button className='button-transparent'>
			{text}
		</Button>
	)
}

export default ButtonTransparent
