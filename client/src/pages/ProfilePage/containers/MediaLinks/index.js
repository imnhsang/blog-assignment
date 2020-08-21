import React from 'react'
import { Icon } from 'semantic-ui-react'

import './style.scss'

const MediaLinks = () => {
	return (
		<div className='media-links'>
			<div className='media-links__header'>
				<Icon name='share alternate' color='grey' size='big' />
				<span>MEDIA LINKS</span>
			</div>
			<div className='media-links__information'>
				<div className='media-links__information__signature'>
					<a href='/'>Nguyen Hoang Sang ft. Leo Nguyen</a>
				</div>
				<div className='media-links__information__social'>
					<p className='media-links__information__social__title'>
						Finding Your Voice
					</p>
					<div className='media-links__information__social__list-social'>
						<a href='/'>
							<Icon name='facebook f' color='black' />
						</a>
            <a href='/'>
							<Icon name='twitter' color='black' />
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MediaLinks
