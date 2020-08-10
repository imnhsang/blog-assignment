import React from 'react'

import { Icon } from 'semantic-ui-react'

import './style.scss'

const AreaItemSingleService = ({ name, title }) => {
	return (
		<div className='single-service col-md-12 col-xl-6 col-3 row'>
			<div className='single-service__icon'>
				<Icon color='grey' size='big' name={name} />
			</div>
			<div className='single-service__content'>
				<div className='single-service__content__title'>{title}</div>
				<div className='single-service__content__description'>
					Lorem ipsum dolor sit amet consect adipisicing elit. Necessi
					voluptatum quod nisi vitae officiis, quae, fugit porro dolore. Lorem
					ipsum dolor sit amet consectetur adipisicing elit Itaque ea ipsum.
				</div>
			</div>
		</div>
	)
}

export default AreaItemSingleService
