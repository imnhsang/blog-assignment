import React from 'react'

import { getDayMonthYear, uppercaseLetter, getUIDFromStorage } from 'utils'
import './style.scss'

import imageCover from 'assets/images/background/home_welcome.jpg'
import { Icon, Grid, Popup, Button } from 'semantic-ui-react'

const ArticleCard = ({
	item,
	category,
	openModalEditBlog,
	handleDeleteBlog,
	handleShowModalBlog,
}) => {
	return (
		<div className='article-card'>
			{!openModalEditBlog && item.uid === getUIDFromStorage() && (
				<Popup
					wide
					trigger={
						<div className='article-card__action-edit'>
							<Icon circular name='options' inverted color='blue' />
						</div>
					}
          on='click'
          position='top right'
				>
					<Grid divided columns='equal'>
						<Grid.Column>
							<Popup
								trigger={
									<Button
										color='blue'
										content='Edit'
										onClick={() => handleShowModalBlog(item)}
										fluid
									/>
								}
								content='Edit blog'
								size='tiny'
								inverted
							/>
						</Grid.Column>
						<Grid.Column>
							<Popup
								trigger={
									<Button
										color='red'
										content='Delete'
										fluid
										onClick={() => handleDeleteBlog(item)}
									/>
								}
								content='Remove blog'
								size='tiny'
								inverted
							/>
						</Grid.Column>
					</Grid>
				</Popup>
			)}
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
