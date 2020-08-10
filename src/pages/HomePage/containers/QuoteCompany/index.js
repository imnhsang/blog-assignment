import React from 'react'

import './style.scss'

import quotebackground from 'assets/images/background/home_quote.jpg'
import schoolLogo from 'assets/images/logo/home_school.png'

const AreaQuoteCompany = () => {
	return (
		<div
			className='area-quote'
			style={{ backgroundImage: `url(${quotebackground})` }}
		>
			<div className='area-quote__quote'>
				<p className='area-quote__quote__title'>
					&#786; &#786; It saved me countless hours an their selection process
					was on point.
				</p>
				<p className='area-quote__quote__content'>
					I&#39;ve been in talent development for a decade and wish I had been
					using this before. We received great offers from very fitting
					providers in the leadership and sales domain. All of the director
					attending the session were thrilled and thanked me for bringing great
					trainer in.&#789; &#789;
				</p>
				<p className='area-quote__quote__author'>STANLEY WOOD</p>
				<p className='area-quote__quote__position'>
					TALENT DEVELOPMENT, NANYANG TECHONOLOGICAL UNIVERSITY
				</p>
				<img
					src={schoolLogo}
					alt='school'
					className='area-quote__quote__logo-school'
				/>
			</div>
		</div>
	)
}

export default AreaQuoteCompany
