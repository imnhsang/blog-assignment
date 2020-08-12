import React from 'react'
import useMergeState from 'hooks/useMergeState'
import { Icon } from 'semantic-ui-react'
import Button from 'components/Button/Default'

import { lengthToArrayBoolean } from 'utils'

import './style.scss'

const RecommendedPrograms = ({ data }) => {
	const [activeIndexs, setActiveIndexs] = useMergeState(
		data.length !== 0 ? lengthToArrayBoolean(data.length) : {}
	)
	const handleOnClickOpenContent = (index) => {
		console.log(index)
		console.log(activeIndexs)
		if (activeIndexs[index]) {
			setActiveIndexs({ [index]: false })
		} else {
			setActiveIndexs({ [index]: true })
		}
	}
	return (
		<div className='recommended-programs'>
			<div className='recommended-programs__header'>
				<Icon name='star outline' color='grey' size='big' />
				<span>RECOMMENDED PROGRAMS</span>
			</div>
			<div className='recommended-programs__list-program'>
				{data.map((ele, inx) => (
					<div key={inx} className='program'>
						<div className='program__header'>
							<span>{ele.name}</span>
							<div
								className='open-program-content'
								onClick={() => handleOnClickOpenContent(inx)}
							>
								<Icon name='angle down' color='grey' />
							</div>
						</div>
						<div
							className={`program__content ${activeIndexs[inx] ? 'show' : 'hide'}`}
						>
							<div className='program__content__objective flex'>
								<p className='col-4'>Objective:</p>
								<p className='col-8'>{ele.objective}</p>
							</div>
							<div className='program__content__target flex'>
								<p className='col-4'>Target Audience:</p>
								<p className='col-8'>{ele.target}</p>
							</div>
							<div className='program__content__topic flex'>
								<p className='col-4'>Topics Covered:</p>
								<div className='col-8'>
									<ul>
										{ele.topics.map((e, inx) => (
											<li key={inx}>{e}</li>
										))}
									</ul>
									<div className='program__content__check'>
										<Button name='CHECK AVAILABILE' />
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default RecommendedPrograms
