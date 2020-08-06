import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

import './Button.Transparent.Arrow.scss'

const ButtonTransparentArrow = ({ name }) => {
	return (
		<Button className='button-transparent-arrow'>
			{name} <Icon name='arrow right' />
		</Button>
	)
}

export default ButtonTransparentArrow
