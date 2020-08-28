import React from 'react'
import { useSelector } from 'react-redux'
import { Loader } from 'semantic-ui-react'
import ItemCategoryTrainer from 'pages/HomePage/components/Item/CategoryTrainer'
// import Button from 'components/Button/TransparentArrowDown'

import './style.scss'

const AreaCategoryTrainer = ({ data }) => {
	const loadingGetCategory = useSelector((state) => state.category.loading)
	return (
		<div className='area-category-trainer row flex-column items-center'>
			<p className='area-category-trainer__title text-center'>
				GAIN ACESS TO A NETWORK OF TOP TRAINERS
			</p>
			<Loader active={loadingGetCategory} inline='centered' />
			<div className='row area-category-trainer__list-category'>
				{data &&
					data.map((e, inx) => (
						<ItemCategoryTrainer
							id={e.id}
							name={e.name}
							title={e.title}
							description={e.description}
							key={inx}
						/>
					))}
			</div>
			{/* <Button text='VIEW MORE CATEGORIES' /> */}
		</div>
	)
}

export default AreaCategoryTrainer
