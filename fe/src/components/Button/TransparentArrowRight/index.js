import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

import './style.scss'

const ButtonTransparentArrowRight = ({ name }) => {
	return (
		<Button className='button-transparent-arrow-right'>
			{name} <Icon name='arrow right' />
		</Button>
	)
}

export default ButtonTransparentArrowRight
