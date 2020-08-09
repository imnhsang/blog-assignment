import React, { useEffect, useState } from 'react'
import { Icon } from 'semantic-ui-react'

import Logo from 'components/Logo/CompanyWhite'
import ButtonRequest from 'components/Button/Default'

import 'assets/stylesheets/global.scss'
import './style.scss'

function HeaderPage({ type }) {
	const typeHeader =
		type === 'guess' ? 'header-page--guess' : 'header-page--member'
	const [classNameHeader, setClassNameHeader] = useState(typeHeader)

	const name = 'Leo'

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
	})

	const handleScroll = () => {
		if (window.pageYOffset > 0) {
			setClassNameHeader(`${typeHeader} active`)
		} else {
			setClassNameHeader(typeHeader)
		}
	}
	return (
		<div className='header-page'>
			{!type && (
				<div className='header-page--none'>
					<Logo type='blue' />
				</div>
			)}

			{type === 'blog' && (
				<div className='header-page--blog'>
					<div className='header-page__logo'>
						<Logo type='blue' />
					</div>
					<div className='header-page__nav'>
						<ul className='header-page__nav__list-nav-item'>
							<li>
								<a href='/'>BLOG</a>
							</li>
							<li>
								<a href='/'>FEATURED</a>
							</li>
							<li>
								<a href='/'>LATEST</a>
							</li>
						</ul>
						<div className='header-page__nav__list-control'>
							<ButtonRequest name='SIGN UP' />
						</div>
					</div>
				</div>
			)}

			{type === 'member' && (
				<div className={classNameHeader}>
					<div className='header-page__logo'>
						<Logo
							type={classNameHeader.includes('active') ? 'blue' : 'white'}
						/>
					</div>
					<div className='header-page__nav'>
						<ul className='header-page__nav__list-nav-item'>
							<li>
								<a href='/'>REQUESTS</a>
							</li>
							<li>
								<a href='/'>MESSAGES</a>
							</li>
						</ul>
						<div className='header-page__nav__list-control'>
							<ButtonRequest name='NEW REQUEST' />
							<div className='profile-nav'>
								<div className='profile-nav__avatar'>
									<span>{name[0]}</span>
								</div>
								<div className='profile-nav__name'>
									<span>{name}</span>
								</div>
								<div className='profile-nav__arrow'>
									<Icon name='angle down' />
								</div>
							</div>
						</div>
					</div>
				</div>
			)}

			{type === 'guess' && (
				<div className={classNameHeader}>
					<div className='header-page__logo'>
						<Logo
							type={classNameHeader.includes('active') ? 'blue' : 'white'}
						/>
					</div>
					<div className='header-page__nav'>
						<ul className='header-page__nav__list-nav-item'>
							<li>
								<a href='/'>HOW IT WORKS</a>
							</li>
							<li>
								<a href='/'>APPLY AS A TRAINER</a>
							</li>
							<li>
								<a href='/'>SIGN IN</a>
							</li>
							<li>
								<a href='/'>SIGN UP FREE</a>
							</li>
						</ul>
					</div>
				</div>
			)}
		</div>
	)
}

export default HeaderPage
