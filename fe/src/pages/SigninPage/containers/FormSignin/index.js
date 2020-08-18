import React, { useState } from 'react'
import useMergeState from 'hooks/useMergeState'
import { Redirect, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'

import { validateEmail } from 'utils'

import InputEmail from 'components/Input/Default'
import InputPassword from 'components/Input/Default'
import CheckBoxDefault from 'components/Input/Checkbox'
import ButtonSign from 'components/Button/ArrowRight'

import './style.scss'

const FormSignin = ({ onLogin, uid }) => {
	const [formState, setFormState] = useMergeState({ email: '', password: '' })
	const [errors, setErrors] = useState({})
	const history = useHistory()

	const validateInputEmail = (value) => {
		if (value.length === 0) {
			setErrors({ ...errors, email: 'Email address is required' })
		} else if (validateEmail(value)) {
			setErrors({ ...errors, email: 'Invalid email address' })
		} else {
			setErrors({ ...errors, email: '' })
		}
	}

	const validateInputPassword = (value) => {
		if (value.length === 0) {
			setErrors({ ...errors, password: 'Password is required' })
		} else {
			setErrors({ ...errors, password: '' })
		}
	}

	const validateForm = () => {
		const errorsValidateForm = {}
		if (formState.password.length === 0) {
			errorsValidateForm.password = 'Password is required'
		}
		if (formState.email.length === 0) {
			errorsValidateForm.email = 'Email address is required'
		} else if (validateEmail(formState.email)) {
			errorsValidateForm.email = 'Invalid email address'
		}
		if (JSON.stringify(errorsValidateForm) === '{}') {
			return true
		} else {
			setErrors({ ...errorsValidateForm })
			return false
		}
	}

	const handleOnLogin = () => {
		if (validateForm()) {
			onLogin(formState.email, formState.password)
		}
	}

	const handleOnChangeEmail = (e) => {
		setFormState({ email: e.target.value })
		validateInputEmail(e.target.value)
	}

	const handleOnChangePassword = (e) => {
		setFormState({ password: e.target.value })
		validateInputPassword(e.target.value)
	}

	const handleOnkeydownEnter = (e) => {
		if (e.key === 'Enter') {
			handleOnLogin()
		}
	}

	if (uid) {
		return <Redirect to='/profile' />
	}

	return (
		<div className='form-signin'>
			<h1 className='form-signin__title'>Log in and train up</h1>
			<div className='flex flex-column'>
				<div className='mb-05'>
					<InputEmail
						placeholder='Email address'
						value={formState.email}
						handleOnChange={handleOnChangeEmail}
						type='text'
						error={errors.email}
						onKeyDown={handleOnkeydownEnter}
					/>
				</div>
				<InputPassword
					placeholder='Password'
					value={formState.password}
					type='password'
					handleOnChange={handleOnChangePassword}
					error={errors.password}
					onKeyDown={handleOnkeydownEnter}
				/>
			</div>
			<div className='flex justify-between mb-1'>
				<CheckBoxDefault text='Remember Me' />
				<a href='/'>Forgot password?</a>
			</div>
			<ButtonSign fluid name='LOG IN' small onClick={handleOnLogin} />
			<span className='mt-1'>
				Don&#39;t have an account?&nbsp;&nbsp;
				<span onClick={() => history.push('/signup')}>Sign up</span>
			</span>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		uid: state.auth.uid,
	}
}

export default connect(mapStateToProps)(FormSignin)
