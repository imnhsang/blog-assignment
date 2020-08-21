import React from 'react'

import ItemCategoryTrainer from 'pages/HomePage/components/Item/CategoryTrainer'
import Button from 'components/Button/TransparentArrowDown'

import './style.scss'

const AreaCategoryTrainer = ({ data }) => {
	return (
		<div className='area-category-trainer row flex-column items-center'>
			<p className='area-category-trainer__title text-center'>
				GAIN ACESS TO A NETWORK OF TOP TRAINERS
			</p>
			<div className='row area-category-trainer__list-category'>
				{data &&
					data.map((e, inx) => (
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
