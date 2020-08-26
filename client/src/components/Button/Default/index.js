import React from 'react'
import { Button } from 'semantic-ui-react'

import './style.scss'

const ButtonDefault = ({ name, loading, onClick }) => {
	return (
		<Button className='button-default' onClick={onClick} loading={loading}>
			{name}
		</Button>
	)
}

export default ButtonDefault
