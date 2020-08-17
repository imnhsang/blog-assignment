import React from 'react'

import ItemService from 'pages/HomePage/components/Item/SingleService'

import './style.scss'

const AreaServiceCompany = () => {
	const services = [
		{ name: 'clock outline', title: 'CONVENIENCE' },
		{ name: 'gift', title: 'ACCESS TO QUALITY' },
		{ name: 'street view', title: 'CHOICE' },
		{ name: 'bitcoin', title: 'PRICE' },
	]
	return (
		<div className='area-service'>
			<p className='area-service__title text-center'>Lorem4skill is an exclusive network of world-class independent coaches and trainers across North America, Europe and APAC. We connect individuals and companies seeking training with a selection of the best suited local providers.</p>
			<div className='area-service__list-service row'>
				{services.map((e, inx) => (
					<ItemService key={inx} name={e.name} title={e.title} />
				))}
			</div>
		</div>
	)
}

export default AreaServiceCompany
