import React from 'react'
import { Icon } from 'semantic-ui-react'

import Header from 'components/HeaderPage'
import Footer from 'components/FooterPage'
import CoverProfile from 'pages/Profile/containers/CoverProfile'
import Highlights from 'pages/Profile/containers/Hightlights'
import MediaLinks from 'pages/Profile/containers/MediaLinks'
import RecommendedPrograms from 'pages/Profile/containers/RecommendPrograms'
import ButtonEngage from 'components/Button/Default'

import './style.scss'

const ProfilePage = () => {
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

	return (
		<div className='profile-page'>
			<Header type='member' />
			<CoverProfile />

			<ul className='profile-page__scrollspy'>
				<li className='active'>
					<span>CAREER</span>
					<Icon name='list ul' size='large' />
					{/* <a href='#career'>CAREER</a> */}
				</li>
				<li>
					<span>SKILLS</span>
					<Icon name='settings' size='large' />
					{/* <a href='#skills'>SKILLS</a> */}
				</li>
				<li>
					<span>PROGRAMS</span>

					<Icon name='star outline' size='large' />
					{/* <a href='#programs'>PROGRAMS</a> */}
				</li>
				<li>
					<span>CLIENTS</span>
					<Icon name='users' size='large' />
					{/* <a href='#clients'>CLIENTS</a> */}
				</li>
				<li>
					<span> MEDIA LINKS</span>
					<Icon name='share alternate' size='large' />
					{/* <a href='#medialinks'>MEDIA LINKS</a> */}
				</li>
			</ul>

			<div className='py-6 d-flex'>
				<div className='profile-page__quote'>
					<span>
						&#34;As an award winner emcee, master facilitator, and a leading
						authority on voice, presentation and public speaking skills Deborah
						has shared the stage with Prime Minesters, TV stars and a like.&#34;
					</span>
				</div>
				<div id='career'>
					<Highlights data={careers} name='CAREER HIGHLIGHTS' icon='list ul' />
				</div>
				<div id='skills'>
					<Highlights data={skills} name='SKILL CAUGHT' icon='settings' />
				</div>
				<div id='programs'>
					<RecommendedPrograms data={programs} />
				</div>
				<div id='clients'>
					<Highlights data={clients} name='CLIENTS' icon='users' />
				</div>
				<div id='medialinks'>
					<MediaLinks />
				</div>
				<div className='text-center'>
					<ButtonEngage name='ENGAGE NOW' />
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default ProfilePage
