import React from 'react'

import LogoCompany from 'components/Logo/CompanyWhite'

import './style.scss'

const FooterPage = () => {
	const locations = [
		'Singapore',
		'Kuala Lumpur',
		'Hong Kong',
		'Sydney',
		'Melbourne',
		'London',
		'New York',
		'Chicago',
		'Washington, DC',
		'Toronto',
		'Paris',
		'Berlin',
		'Shanghai',
		'Amsterdam',
		'Dubai',
		'San Francisco',
		'Vancouver',
	]
	return (
		<div className='footer-page'>
			<div className='row margin-b-2'>
				<div className='col-lg-12 col-md-12 col-3 footer__logo'>
					<LogoCompany />
				</div>
				<div className='col-lg-4 col-sm-12 col-3 footer__company'>
					<div className='title'>COMPANY</div>
					<ul className='list'>
						<li>
							<a href='/'>Contact Us</a>
						</li>
						<li>
							<a href='/'>Privacy Policy</a>{' '}
						</li>
						<li>
							<a href='/'>Terms and Conditions</a>{' '}
						</li>
					</ul>
				</div>
				<div className='col-lg-4 col-sm-12 col-3 footer__product'>
					<div className='title'>PRODUCT</div>
					<ul className='list'>
						<li>
							<a href='/'>How it works</a>
						</li>
						<li>
							<a href='/'>Guide</a>{' '}
						</li>
						<li>
							<a href='/'>Members Directiory</a>{' '}
						</li>
					</ul>
				</div>
				<div className='col-lg-4 col-sm-12 col-3 footer__social'>
					<div className='title'>SOCIAL</div>
					<ul className='list'>
						<li>
							<a href='/'>LinkedIn</a>
						</li>
					</ul>
				</div>
			</div>
			<div className='footer-rights'>
				<span>&#169; 2020 lorem4skill - All rights reserved</span>
			</div>
			<ul className='row footer-location'>
				{locations.map((e, inx) => (
					<li key={inx}>
						<span>{e}</span>
					</li>
				))}
			</ul>
			<div className='footer-content'>
				<span>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industrys standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book. It has survived not only
					five centuries, but also the leap into electronic typesetting,
					remaining essentially unchanged. It was popularised in the 1960s with
					the release of Letraset sheets containing Lorem Ipsum passages, and
					more recently with desktop publishing software like Aldus PageMaker
					including versions of Lorem Ipsum.
				</span>
			</div>
		</div>
	)
}

export default FooterPage
