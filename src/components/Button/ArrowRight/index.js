import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

import './style.scss'

const ButtonArrowRight = ({ name, fluid, small }) => {
	return (
		<Button
			fluid={fluid}
			className={`button-arrow-right ${small ? 'small' : ''}`}
		>
			{name} <Icon name='arrow right' />
		</Button>
	)
}

export default ButtonArrowRight
