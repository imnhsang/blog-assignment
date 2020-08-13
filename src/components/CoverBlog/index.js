import React from 'react'
import { Icon } from 'semantic-ui-react'
import './style.scss'

import imageCover from 'assets/images/background/home_welcome.jpg'

const CoverBlog = ({ unfeatured, category }) => {
	return (
		<div className='cover-blog'>
			{category && <p className='cover-blog__type-category'>{category}</p>}
			<div
				className={`cover-blog__content ${unfeatured ? 'unfeatured' : ''} ${
					category ? 'category' : ''
				}`}
				style={{ backgroundImage: `url(${imageCover})` }}
			>
				<div className='cover-blog__content__article'>
					{!unfeatured && (
						<p className='cover-blog__content__article__featured'>
							FEATURED ARTICLE
						</p>
					)}
					<p className='cover-blog__content__article__title'>
						Hire the Best Corporate Trainer or Coach for Your Business
					</p>
					<div className={`flex ${unfeatured ? 'justify-center' : ''}`}>
						<span className='cover-blog__content__article__type'>
							IN <span className='font-black'>coaching</span>
						</span>
						<span className='cover-blog__content__article__date'>
							AUGUST 13, 2020
						</span>
					</div>
					<div className='cover-blog__content__article__social'>
						<a href='/'>
							<Icon name='facebook f' />
						</a>
						<a href='/'>
							<Icon name='twitter' />
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CoverBlog
