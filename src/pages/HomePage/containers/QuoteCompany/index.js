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
			<div className='quote'>
				<p className='title'>
					&#786; &#786; It saved me countless hours an their selection process
					was on point.
				</p>
				<p className='content'>
					I&#39;ve been in talent development for a decade and wish I had been
					using this before. We received great offers from very fitting
					providers in the leadership and sales domain. All of the director
					attending the session were thrilled and thanked me for bringing great
					trainer in.&#789; &#789;
				</p>
				<p className='author'>STANLEY WOOD</p>
				<p className='position'>
					TALENT DEVELOPMENT, NANYANG TECHONOLOGICAL UNIVERSITY
				</p>
				<img src={schoolLogo} alt='school' />
			</div>
		</div>
	)
}

export default AreaQuoteCompany
