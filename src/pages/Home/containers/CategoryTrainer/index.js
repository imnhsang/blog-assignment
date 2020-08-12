import React from 'react'

import ItemCategoryTrainer from 'pages/Home/components/Item/CategoryTrainer'
import Button from 'pages/Home/components/Button/TransparentArrowDown'

import './style.scss'

const AreaCategoryTrainer = () => {
	const categories = [
		{
			name: 'user outline',
			title: 'LEADERSHIP',
			description: 'Experts in crafting constructive leaders.',
		},
		{
			name: 'rocketchat',
			title: 'COACHING',
			description: 'Experts in implementing coaching methodologies.',
		},
		{
			name: 'television',
			title: 'SALES',
			description: 'Experts in developing sales strategies and tactics.',
		},
		{
			name: 'users',
			title: 'PUBLIC SPEAKING',
			description: 'Experts in the art of effective communication.',
		},
		{
			name: 'game',
			title: 'TEAM BUILDING',
			description: 'Experts in building and cultivating company culture.',
		},
		{
			name: 'setting',
			title: 'MANAGEMENT',
			description: 'Experts in in creating effective managers.',
		},
		{
			name: 'money bill alternate outline',
			title: 'FINANCE',
			description: 'Experts in in valuation, accouting, controlling, etc.',
		},
		{
			name: 'volume up',
			title: 'MARKETING',
			description: 'Experts in untilizing & organic traffic.',
		},
	]
	return (
		<div className='area-category-trainer row flex-column items-center'>
			<p className='area-category-trainer__title text-center'>
				GAIN ACESS TO A NETWORK OF TOP TRAINERS
			</p>
			<div className='row area-category-trainer__list-category'>
				{categories.map((e, inx) => (
					<ItemCategoryTrainer
						name={e.name}
						title={e.title}
						description={e.description}
						key={inx}
					/>
				))}
			</div>
			<Button text='VIEW MORE CATEFORIES' />
		</div>
	)
}

export default AreaCategoryTrainer
