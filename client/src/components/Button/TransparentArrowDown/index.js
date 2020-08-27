import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

import './style.scss'

const ButtonTransparentArrowDown = ({ text, onClick }) => {
	return (
		<Button className='button-transparent-arrow-down' onClick={onClick}>
			{text}&nbsp;
			<Icon name='angle down' />
		</Button>
	)
}

export default ButtonTransparentArrowDown
