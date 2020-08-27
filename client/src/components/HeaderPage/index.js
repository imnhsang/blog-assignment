import React, { useEffect, useState } from 'react'
import { Icon, Dropdown } from 'semantic-ui-react'
import { connect, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { signout } from 'redux/services/auth'
import { fetchProfileIfNeeded } from 'redux/services/profile'
import { fetchListCategoryIfNeeded } from 'redux/services/category'
import { getUIDFromStorage } from 'utils'

import Logo from 'components/Logo/CompanyWhite'
import ButtonRequest from 'components/Button/Default'

import './style.scss'

function HeaderPage({
	type,
	signout,
	fetchProfileIfNeeded,
	fetchListCategoryIfNeeded,
	handleOpenModalBlog,
}) {
	const [classNameHeader, setClassNameHeader] = useState('')
	const [classNameHamburger, setClassNameHamburger] = useState('')
	const [signoutOpen, setSignoutOpen] = useState(false)
	const history = useHistory()

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	useEffect(() => {
		if (type === 'member') {
			fetchProfileIfNeeded(getUIDFromStorage())
		}
	})

	const profile = useSelector((state) => state.profile.profile)

	useEffect(() => {
		if (type === 'blog') {
			fetchListCategoryIfNeeded()
		}
	})

	const listCategory = useSelector((state) => state.category.listCategory)

	const handleScroll = () => {
		if (window.pageYOffset > 0) {
			setClassNameHeader('active-header')
		} else {
			setClassNameHeader('')
		}
	}

	const handleHamburger = () => {
		return classNameHamburger === ''
			? setClassNameHamburger('active-hamburger')
			: setClassNameHamburger('')
	}

	const handleRedirect = (path) => {
		history.push(path)
	}

	return (
		<div className='header-page'>
			{type && (
				<div
					className={`header-page__hamburger ${classNameHamburger}`}
					onClick={handleHamburger}
				>
					<div
						className={`line-1  ${
							classNameHeader || type !== 'guess' ? 'blue-black' : ''
						}`}
					></div>
					<div
						className={`line-2  ${
							classNameHeader || type !== 'guess' ? 'blue-black' : ''
						}`}
					></div>
					<div
						className={`line-3  ${
							classNameHeader || type !== 'guess' ? 'blue-black' : ''
						}`}
					></div>
				</div>
			)}

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
						<div
							className={`top-nav ${!classNameHamburger ? 'hide' : ''}`}
						></div>
						<ul
							className={`header-page__nav__list-nav-item 
							${!classNameHamburger ? 'hide' : ''}
							`}
						>
							<li>
								<a href='/'>BLOG</a>
							</li>
							<li>
								<a href='/'>FEATURED</a>
							</li>
							<li>
								<a href='/'>LATEST</a>
							</li>
							<li>
								<Dropdown text='CATEGORIES' pointing='top'>
									<Dropdown.Menu>
										{listCategory &&
											listCategory.map((e, inx) => (
												<Dropdown.Item key={inx} text={e.title} />
											))}
									</Dropdown.Menu>
								</Dropdown>
							</li>
						</ul>
						<div
							className={`header-page__nav__list-control	${
								!classNameHamburger ? 'hide' : ''
							}
							`}
						>
							<ButtonRequest
								onClick={() => handleRedirect('/signup')}
								name='SIGN UP'
							/>
						</div>
					</div>
				</div>
			)}

			{type === 'member' && (
				<div className={`header-page--member ${classNameHeader}`}>
					<div className='header-page__logo'>
						<Logo type='blue' />
					</div>
					<div className='header-page__nav'>
						<ul
							className={`header-page__nav__list-nav-item ${
								!classNameHamburger ? 'hide' : ''
							}`}
						>
							<li>
								<span onClick={() => handleRedirect('/')}>REQUESTS</span>
							</li>
							<li>
								<a href='/'>MESSAGES</a>
							</li>
						</ul>
						<div
							className={`header-page__nav__list-control ${
								!classNameHamburger ? 'hide' : ''
							}`}
						>
							<ButtonRequest name='NEW REQUEST' onClick={handleOpenModalBlog} />
							<div
								className='profile-nav'
								onClick={() => setSignoutOpen(!signoutOpen)}
							>
								<div className='profile-nav__avatar'>
									{profile && profile.avatar ? (
										<img src={profile.avatar} alt='' />
									) : (
										<span>{profile && profile.firstname[0]}</span>
									)}
								</div>
								<div className='profile-nav__name'>
									<span>{profile && profile.firstname}</span>
								</div>
								<div className='profile-nav__arrow'>
									<Icon name='angle down' />
								</div>
								{signoutOpen && (
									<div className='profile-nav__dropdown'>
										<li onClick={signout}>LOG OUT</li>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			)}

			{type === 'guess' && (
				<div className={`header-page--guess ${classNameHeader}`}>
					<div className='header-page__logo'>
						<Logo
							type={classNameHeader.includes('active') ? 'blue' : 'white'}
						/>
					</div>
					<div className='header-page__nav'>
						<ul
							className={`header-page__nav__list-nav-item 
							${!classNameHamburger ? 'hide' : ''}
							`}
						>
							<li>
								<a href='/'>HOW IT WORKS</a>
							</li>
							<li>
								<a href='/'>APPLY AS A TRAINER</a>
							</li>
							<li>
								<p onClick={() => handleRedirect('/login')}>SIGN IN</p>
							</li>
							<li onClick={() => handleRedirect('/signup')}>
								<p>SIGN UP FREE</p>
							</li>
						</ul>
					</div>
				</div>
			)}
		</div>
	)
}

const actionCreators = {
	signout,
	fetchProfileIfNeeded,
	fetchListCategoryIfNeeded,
}

export default connect(null, actionCreators)(HeaderPage)
