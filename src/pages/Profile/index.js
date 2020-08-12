import React from 'react'

import Header from 'components/HeaderPage'
import Footer from 'components/FooterPage'
import CoverProfile from 'pages/Profile/containers/CoverProfile'

import './style.scss'

const ProfilePage = () => {
	return (
		<div className='profile-page'>
			<Header type='member' />
			<CoverProfile />
			<Footer />
		</div>
	)
}

export default ProfilePage
