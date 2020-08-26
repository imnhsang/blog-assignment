import React from 'react'

import { getDayMonthYear, uppercaseLetter } from 'utils'
import './style.scss'

import imageCover from 'assets/images/background/home_welcome.jpg'

const ArticleCard = ({ item, category }) => {
	return (
		<div className='article-card'>
			<img
				src={(item && item.cover) || imageCover}
				alt=''
				className='article-card__cover'
			/>
			<div className='article-card__information'>
				<p className='article-card__information__title'>{item && item.title}</p>
				<div className='flex'>
					<span className='article-card__information__type'>
						IN <span>{category && uppercaseLetter(category)}</span>
					</span>
					<span className='article-card__information__date'>
						{item && getDayMonthYear(item.created_at)}
					</span>
				</div>
			</div>
		</div>
	)
}

export default ArticleCard
