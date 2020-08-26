import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Icon } from 'semantic-ui-react'
import Scrollspy from 'react-scrollspy'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import useMergeState from 'hooks/useMergeState'

import Header from 'components/HeaderPage'
import Footer from 'components/FooterPage'
import CoverProfile from 'pages/ProfilePage/containers/CoverProfile'
import Highlights from 'pages/ProfilePage/containers/Hightlights'
import MediaLinks from 'pages/ProfilePage/containers/MediaLinks'
import RecommendedPrograms from 'pages/ProfilePage/containers/RecommendPrograms'
import ButtonEngage from 'components/Button/Default'
import ModalUpdateProfile from 'pages/ProfilePage/containers/ModalUpdateProfile'

import { refreshProfile } from 'redux/services/profile'
import './style.scss'

const ProfilePage = ({ refreshProfile }) => {
	const careers = [
		{
			subscription:
				'More than 25 years of experience in executive training for public speaking and presetation, certified speaking professional',
		},
		{
			subscription:
				'Co-author to the best selling book "88 Essential Secrets for Achieveing Greate Success at Work"',
		},
	]
	const skills = [
		{
			title: 'Six Sigma Training',
			subscription: 'California Institute College of Art',
		},
		{
			title: 'Sittuational Leadership',
			subscription: 'Rhode Island School of Design',
		},
	]
	const clients = [
		{ title: 'Name of Company', subscription: 'Description goes here' },
		{ title: 'Name of Company', subscription: 'Description goes here' },
	]
	const programs = [
		{
			name: 'Public Speaking Workshop',
			objective: 'Public speaking workshop meant to help sales pitches',
			target: 'Mid level managers with 5 years of experience',
			topics: [
				'Intonation an Verbal Communication',
				'Non verbal communication',
				'Understanding the audience',
			],
		},
		{
			name: 'Another Workshop',
			objective: 'Public speaking workshop meant to help sales pitches',
			target: 'Mid level managers with 5 years of experience',
			topics: ['Non verbal communication', 'Understanding the audience'],
		},
	]
	const profile = useSelector((state) => state.profile.profile)
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)

	const [avatarFile, setAvatarFile] = useState(null)
	const [openModalProfile, setOpenModalProfile] = useState(false)
	const [updateProfileData, setUpdateProfileData] = useMergeState({})

	const handleShowModalProfile = () => {
		setOpenModalProfile(!openModalProfile)
	}

	const handleChangeAvatar = (e) => {
		setAvatarFile(e.target.files[0])
	}

	const handleChangeText = (e) => {
		setUpdateProfileData({ [e.target.name]: e.target.value })
	}

	const handleSaveProfile = async () => {
		if (avatarFile || JSON.stringify(updateProfileData) !== '{}') {
			if (await refreshProfile(avatarFile, updateProfileData)) {
				handleShowModalProfile()
			}
		}
	}

	if (!isAuthenticated) {
		return <Redirect to='/login' />
	}

	return (
		<div className='profile-page'>
			<Header type='member' />
			<CoverProfile
				profile={profile}
				handleShowModalProfile={handleShowModalProfile}
				openModalProfile={openModalProfile}
			/>
			{openModalProfile && (
				<ModalUpdateProfile
					handleShowModalProfile={handleShowModalProfile}
					profile={profile}
					updateProfile={updateProfileData}
					avatarFile={avatarFile}
					handleChangeAvatar={handleChangeAvatar}
					handleSaveProfile={handleSaveProfile}
					handleChangeText={handleChangeText}
				/>
			)}
			<Scrollspy
				items={['career', 'skills', 'programs', 'clients', 'medialinks']}
				currentClassName='active'
				className='profile-page__scrollspy'
			>
				<li>
					<span>CAREER</span>
					<Icon name='list ul' size='large' />
				</li>
				<li>
					<span>SKILLS</span>
					<Icon name='settings' size='large' />
				</li>
				<li>
					<span>PROGRAMS</span>
					<Icon name='star outline' size='large' />
				</li>
				<li>
					<span>CLIENTS</span>
					<Icon name='users' size='large' />
				</li>
				<li>
					<span> MEDIA LINKS</span>
					<Icon name='share alternate' size='large' />
				</li>
			</Scrollspy>
			<div className='py-6 d-flex'>
				<div className='profile-page__quote'>
					<span>
						&#34;As an award winner emcee, master facilitator, and a leading
						authority on voice, presentation and public speaking skills Deborah
						has shared the stage with Prime Minesters, TV stars and a like.&#34;
					</span>
				</div>
				<span className='point' id='career' />
				<Highlights data={careers} name='CAREER HIGHLIGHTS' icon='list ul' />
				<span className='point' id='skills' />
				<Highlights data={skills} name='SKILL CAUGHT' icon='settings' />
				<span className='point' id='programs' />
				<RecommendedPrograms data={programs} />
				<span className='point' id='clients' />
				<Highlights data={clients} name='CLIENTS' icon='users' />
				<span className='point' id='medialinks' />
				<MediaLinks profile={profile} />
				<div className='text-center'>
					<ButtonEngage name='ENGAGE NOW' />
				</div>
			</div>
			<Footer />
		</div>
	)
}

const actionCreators = {
	refreshProfile,
}
export default connect(null, actionCreators)(ProfilePage)
