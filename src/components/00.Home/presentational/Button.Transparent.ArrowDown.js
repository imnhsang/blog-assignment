import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

import './Button.Transparent.ArrowDown.scss'

const ButtonTransparentArrowDown = ({ text }) => {
	return (
		<Button className='button-transparent-arrow-down'>
			{text}&nbsp;<Icon name='angle down' />
		</Button>
	)
}

export default ButtonTransparentArrowDown
