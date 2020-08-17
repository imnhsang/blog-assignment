import React from 'react'
import { Icon } from 'semantic-ui-react'

import './style.scss'

const Highlights = ({ data, name, icon }) => {
	return (
		<div className='highlights'>
			<div className='highlights__header'>
				<Icon name={icon} color='grey' size='big' />
				<span>{name}</span>
			</div>
			<div className='highlights__list-highlight'>
				<ul>
					{data &&
						data.map((e, inx) => (
							<li key={inx}>
								<Icon name='circle outline' size='small' /> &nbsp;
								<div className='hightlight'>
									<p className='highlight__title'>{e.title}</p>
									<p className='highlight__subscription'>{e.subscription}</p>
								</div>
							</li>
						))}
				</ul>
			</div>
		</div>
	)
}

export default Highlights
