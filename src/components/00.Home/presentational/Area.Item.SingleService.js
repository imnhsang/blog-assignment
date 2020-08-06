import React from 'react'

import { Icon } from 'semantic-ui-react'

import './Area.Item.SingleService.scss'

const AreaItemSingleService = ({ name, title }) => {
	return (
		<div className='single-service col-md-12 col-xl-6 col-3 row'>
			<div className=' col-md-2 col-2'>
				<Icon color='grey' size='big' name={name} />
			</div>
			<div className='content col-md-10 col-8'>
				<div className='title'>{title}</div>
				<div className='description'>
					Lorem ipsum dolor sit amet consect adipisicing elit. Necessi
					voluptatum quod nisi vitae officiis, quae, fugit porro dolore. Lorem
					ipsum dolor sit amet consectetur adipisicing elit Itaque ea ipsum.
				</div>
			</div>
		</div>
	)
}

export default AreaItemSingleService
