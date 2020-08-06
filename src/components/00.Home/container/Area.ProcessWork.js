import React from 'react'

import ItemProcess from 'components/00.Home/presentational/Area.Item.SingleService'

import './Area.ProcessWork.scss'

const AreaProcessWork = () => {
	const processes = [
		{ name: 'file outline', title: '1. REQUEST' },
		{ name: 'clone outline', title: '2. CHOOSE' },
		{ name: 'chat', title: '3. TRAIN' },
		{ name: 'credit card outline', title: '4. PAY' },
	]
	return (
		<div className='process-work'>
			<p className='title text-align-center'>HOW LOREM4SKILL WORKS?</p>
			<div className='process row'>
				{processes.map((e, inx) => (
					<ItemProcess key={inx} name={e.name} title={e.title} />
				))}
			</div>
		</div>
	)
}

export default AreaProcessWork
