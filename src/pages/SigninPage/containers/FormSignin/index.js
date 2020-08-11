import React, { useState } from 'react'

import { validateEmail } from 'utils'

import InputEmail from 'components/Input/Default'
import InputPassword from 'components/Input/Default'
import CheckBoxDefault from 'components/Input/Checkbox'
import ButtonSign from 'components/Button/ArrowRight'

import './style.scss'
import 'assets/stylesheets/global.scss'

const FormSignin = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [errors, setErrors] = useState({})

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

	return (
		<div className='form-signin'>
			<h1 className='form-signin__title'>Log in and train up</h1>
			<div className='d-flex flex-direction-column'>
				<div style={{ marginBottom: '0.5rem' }}>
					<InputEmail
						placeholder='Email address'
						value={email}
						handleOnChange={handleOnChangeEmail}
						type='text'
						error={errors.email}
					/>
				</div>
				<InputPassword
					placeholder='Password'
					value={password}
					type='password'
					handleOnChange={handleOnChangePassword}
					error={errors.password}
				/>
			</div>
			<div className='d-flex justify-content-space-between mr-b-1'>
				<CheckBoxDefault text='Remember Me' />
				<a href='/'>Forgot password?</a>
			</div>
			<ButtonSign fluid name='LOG IN' small />
			<span className='mr-t-1'>
				Don&#39;t have an account?&nbsp;&nbsp;<a href='/'>Sign up</a>
			</span>
		</div>
	)
}

export default FormSignin
