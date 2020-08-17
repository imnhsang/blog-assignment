import React from 'react'

import './style.scss'

import imageCover from 'assets/images/background/home_welcome.jpg'

const ArticleCard = () => {
	return (
		<div className='article-card'>
			<img src={imageCover} alt='' className='article-card__cover' />
			<div className='article-card__information'>
				<p className='article-card__information__title'>
					longest post title goes here reaches second line
				</p>
				<div className='flex'>
					<span className='article-card__information__type'>
						IN <span>COACHING</span>
					</span>
					<span className='article-card__information__date'>
						august 18, 2020
					</span>
				</div>
			</div>
		</div>
	)
}

export default ArticleCard
