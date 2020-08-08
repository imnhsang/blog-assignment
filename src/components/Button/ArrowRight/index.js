import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

import './style.scss'

const ButtonArrowRight = ({ name }) => {
	return (
		<Button className='button-arrow-right'>
			{name} <Icon name='arrow right' />
		</Button>
	)
}

export default ButtonArrowRight
