import React from 'react'
import { Button } from 'semantic-ui-react'

import './style.scss'

const ButtonDefault = ({ name }) => {
	return <Button className='button-default'>{name}</Button>
}

export default ButtonDefault
