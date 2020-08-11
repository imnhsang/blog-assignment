import React, { useState } from 'react'

import { validateEmail } from 'utils'

import Input from 'components/Input/Default'
import Select from 'components/Select/Default'
import CheckBoxDefault from 'components/Input/Checkbox'
import ButtonSign from 'components/Button/ArrowRight'

import './style.scss'
import 'assets/stylesheets/global.scss'

const FormSingupIndividual = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [firstname, setFirstname] = useState('')
	const [lastname, setLastname] = useState('')
	const [country, setCountry] = useState('')
	const [errors, setErrors] = useState({})

	const dataCountry = ['Lorem 1', 'Lorem 2', 'Lorem 3', 'Lorem 4']

	const handleOnChangeEmail = (e) => {
		setEmail(e.target.value)
		if (validateEmail(e.target.value)) {
			setErrors({ ...errors, email: 'Invalid email address' })
		} else {
			setErrors({ ...errors, email: '' })
		}
	}

	const handleOnChangePassword = (e) => {
		setPassword(e.target.value)
	}
	const handleOnChangeFirstname = (e) => {
		setFirstname(e.target.value)
	}
	const handleOnChangeLastname = (e) => {
		setLastname(e.target.value)
	}
	const handleOnChangeCountry = (e) => {
		setCountry(e.target.value)
	}

	return (
		<div className='form-signup-company'>
			<div className='d-flex flex-direction-column'>
				<div className='d-flex flex-wrap mb-05'>
					<div className=' mb-sm-05 col-sm-12 col-6 pr-sm-0 pr-075'>
						<Input
							placeholder='First name'
							value={firstname}
							handleOnChange={handleOnChangeFirstname}
							type='text'
							error={errors.firstname}
						/>
					</div>
					<div className='col-sm-12 col-6 pl-sm-0 pl-075'>
						<Input
							placeholder='Last name'
							value={lastname}
							handleOnChange={handleOnChangeLastname}
							type='text'
							error={errors.lastname}
						/>
					</div>
				</div>

				<div className='mb-15'>
					<Select
						value={country}
						handleOnChange={handleOnChangeCountry}
						placeholder='Country (Training Location)'
						data={dataCountry}
					/>
				</div>

				<div className='mb-05'>
					<Input
						placeholder='Email address'
						value={email}
						handleOnChange={handleOnChangeEmail}
						type='text'
						error={errors.email}
					/>
				</div>
				<Input
					placeholder='Password'
					value={password}
					type='password'
					handleOnChange={handleOnChangePassword}
					error={errors.password}
				/>
			</div>
			<div className='d-flex justify-content-space-between mr-b-1'>
				<CheckBoxDefault
					checked
					text='Yes! Send me genuinely useful email every now and then to help me get the moust out of lorem4skill'
				/>
			</div>
			<div className='d-flex justify-content-space-between mr-b-1'>
				<CheckBoxDefault
					text={
						'Yes! I understand an agree to the lorem4skill terms of service'
					}
				/>
				{/* <span>
					&nbsp;
					<a href='/'>lorem4skill terms of service</a> include the{' '}
					<a href='/'>User Agree</a> and <a href='/'>Privacy Policy</a>
				</span> */}
			</div>
			<ButtonSign fluid name='GET STARTED' small />
			<span className='mr-t-1'>
				Already have an account?&nbsp;&nbsp;<a href='/'>Sign in</a>
			</span>
		</div>
	)
}

export default FormSingupIndividual
