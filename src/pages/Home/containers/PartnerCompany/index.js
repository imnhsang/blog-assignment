import React from 'react'

import './style.scss'

import googlelogo from 'assets/images/logo/home_google.svg'

const AreaPartnerCompany = () => {
	const partners = [
		{ src: googlelogo, alt: 'google' },
		{ src: googlelogo, alt: 'google' },
		{ src: googlelogo, alt: 'google' },
		{ src: googlelogo, alt: 'google' },
		{ src: googlelogo, alt: 'google' },
		{ src: googlelogo, alt: 'google' },
		{ src: googlelogo, alt: 'google' },
		{ src: googlelogo, alt: 'google' },
	]
	return (
		<div className='area-partner'>
			<p className='area-partner__title text-center'>WE HAVE WORKED WITH:</p>
			<div className='row area-partner__list-partner  justify-between'>
				{partners.map((e, inx) => (
					<img src={e.src} alt={e.alt} key={inx} className='area-partner__list-partner__logo'/>
				))}
			</div>
		</div>
	)
}

export default AreaPartnerCompany
