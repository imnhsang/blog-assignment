import React from 'react'
import { useHistory } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'

import Button from 'pages/HomePage/components/Button/Transaparent'

import './style.scss'

const AreaItemCategoryTrainer = ({ id, name, title, description }) => {
	const history = useHistory()
	const rediectToBlog = () => {
		history.push(`/blog/category/${id}`)
	}
	return (
		<div className='single-category col-sm-12 col-lg-6 col-xl-4 col-3 row'>
			<div className='row'>
				<div className='single-category__icon'>
					<Icon color='grey' size='big' name={name} />
				</div>
				<div className='single-category__content'>
					<div className='single-category__content__title'>{title}</div>
					<div className='single-category__content__description'>
						{description}
					</div>
				</div>
			</div>
			<Button text='LEARN MORE' onClick={() => rediectToBlog(title)} />
		</div>
	)
}

export default AreaItemCategoryTrainer
