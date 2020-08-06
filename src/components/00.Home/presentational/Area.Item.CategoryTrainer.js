import React from 'react'
import { Icon } from 'semantic-ui-react'

import Button from 'components/00.Home/presentational/Button.Transparent'

import './Area.Item.CategoryTrainer.scss'

const AreaItemCategoryTrainer = ({ name, title, description }) => {
	return (
		<div className='single-category-trainer col-sm-12 col-lg-6 col-xl-4 col-3 row'>
			<div className='row'>
				<div className='p-1'>
					<Icon color='grey' size='big' name={name} />
				</div>
				<div className='content'>
					<div className='title'>{title}</div>
					<div className='description'>{description}</div>
				</div>
			</div>
			<Button text='LEARN MORE' />
		</div>
	)
}

export default AreaItemCategoryTrainer
