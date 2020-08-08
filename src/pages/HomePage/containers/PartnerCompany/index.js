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
			<p className='title-area text-align-center'>WE HAVE WORKED WITH:</p>
			<div className='row justify-content-space-between'>
				{partners.map((e, inx) => (
					<img src={e.src} alt={e.alt} key={inx} />
				))}
			</div>
		</div>
	)
}

export default AreaPartnerCompany
