import React from 'react'
import useMergeState from 'hooks/useMergeState'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { signup } from 'redux/services/auth'
import { validateEmail, uppercaseFirstLetter } from 'utils'

import Input from 'components/Input/Default'
import Select from 'components/Select/Default'
import CheckBoxDefault from 'components/Input/Checkbox'
import ButtonSign from 'components/Button/ArrowRight'

import './style.scss'

const FormSingupCompany = ({ signup }) => {
	const [formInformation, setFormInformation] = useMergeState({
		firstname: '',
		lastname: '',
		email: '',
		password: '',
		country: '',
	})
	const [errors, setErrors] = useMergeState({})
	const history = useHistory()

	const dataCountry = ['Lorem 1', 'Lorem 2', 'Lorem 3', 'Lorem 4']

	const validateInputEmail = (value) => {
		if (value.length === 0) {
			setErrors({ email: 'Email address is required' })
		} else if (validateEmail(value)) {
			setErrors({ email: 'Invalid email address' })
		} else {
			setErrors({ email: '' })
		}
	}

	const validateInputText = (name, value) => {
		if (value.length === 0) {
			setErrors({
				...errors,
				[name]: `${name.charAt(0).toUpperCase() + name.slice(1)} is required`,
			})
		} else {
			setErrors({ ...errors, [name]: '' })
		}
	}

	const handleOnChangeEmail = (e) => {
		setFormInformation({ [e.target.name]: e.target.value })
		validateInputEmail(e.target.value)
	}

	const handleOnChange = (e) => {
		setFormInformation({ [e.target.name]: e.target.value })
		validateInputText(e.target.name, e.target.value)
	}

	const handleOnChangeCheckbox = (e) => {
		setFormInformation({ [e.target.name]: e.target.checked })
	}

	const validateForm = () => {
		const errorsValidateForm = {}
		const fields = ['firstname', 'lastname', 'country', 'password']
		fields.forEach((field) => {
			if (formInformation[field].length === 0) {
				errorsValidateForm[field] = `${uppercaseFirstLetter(field)} is required`
			}
		})

		if (validateEmail(formInformation.email)) {
			errorsValidateForm.email = 'Invalid email address'
		}

		if (formInformation.agreeservice !== true) {
			errorsValidateForm.agreeservice = 'Must agree service'
		}

		if (JSON.stringify(errorsValidateForm) === '{}') {
			return true
		} else {
			setErrors({ ...errorsValidateForm })
			return false
		}
	}

	const handleOnSignup = () => {
		if (validateForm()) {
			signup(formInformation)
		}
	}

	const handleOnkeydownEnter = (e) => {
		if (e.key === 'Enter') {
			handleOnSignup()
		}
	}

	return (
		<div className='form-signup-company'>
			<div className='flex flex-column'>
				<div className='flex flex-wrap mb-05'>
					<div className=' mb-sm-05 col-sm-12 col-6 pr-sm-0 pr-075'>
						<Input
							placeholder='First name'
							value={formInformation.firstname}
							name='firstname'
							handleOnChange={handleOnChange}
							type='text'
							onKeyDown={handleOnkeydownEnter}
							error={errors.firstname}
						/>
					</div>
					<div className='col-sm-12 col-6 pl-sm-0 pl-075'>
						<Input
							placeholder='Last name'
							value={formInformation.lastname}
							name='lastname'
							handleOnChange={handleOnChange}
							onKeyDown={handleOnkeydownEnter}
							type='text'
							error={errors.lastname}
						/>
					</div>
				</div>
				<div className='flex flex-wrap mb-05'>
					<div className='col-6 col-sm-12 pr-sm-0 pr-075'>
						<Input
							placeholder='Company name'
							value={formInformation.companyname}
							name='companyname'
							handleOnChange={handleOnChange}
							onKeyDown={handleOnkeydownEnter}
							type='text'
							error={errors.company}
						/>
					</div>
					<div className='col-sm-12 col-6 pl-sm-0 pl-075 mb-sm-1'>
						<Select
							value={formInformation.country}
							name='country'
							handleOnChange={handleOnChange}
							placeholder='Country (Training Location)'
							data={dataCountry}
							error={errors.country}
						/>
					</div>
				</div>
				<div className='mb-05'>
					<Input
						placeholder='Email address'
						value={formInformation.email}
						name='email'
						handleOnChange={handleOnChangeEmail}
						onKeyDown={handleOnkeydownEnter}
						type='text'
						error={errors.email}
					/>
				</div>
				<Input
					placeholder='Password'
					value={formInformation.password}
					type='password'
					name='password'
					handleOnChange={handleOnChange}
					onKeyDown={handleOnkeydownEnter}
					error={errors.password}
				/>
			</div>
			<div className='flex justify-between mb-1'>
				<CheckBoxDefault
					checked
					text='Yes! Send me genuinely useful email every now and then to help me get the moust out of lorem4skill'
				/>
			</div>
			<div className='flex justify-between mb-1'>
				<CheckBoxDefault
					value={formInformation.agreeservice}
					error={errors.agreeservice}
					handleOnChange={handleOnChangeCheckbox}
					name='agreeservice'
					text='Yes! I understand an agree to the lorem4skill terms of service'
				/>
			</div>
			<ButtonSign fluid name='GET STARTED' small onClick={handleOnSignup} />
			<span className='mt-1'>
				Already have an account?&nbsp;&nbsp;
				<span onClick={() => history.push('/login')}>Sign in</span>
			</span>
		</div>
	)
}

const actionCreators = {
	signup,
}

export default connect(null, actionCreators)(FormSingupCompany)
