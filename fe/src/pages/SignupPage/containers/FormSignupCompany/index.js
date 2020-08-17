import React, { useState } from 'react'
import useMergeState from 'hooks/useMergeState'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { signup } from 'actions/auth'
import { validateEmail } from 'utils'

import Input from 'components/Input/Default'
import Select from 'components/Select/Default'
import CheckBoxDefault from 'components/Input/Checkbox'
import ButtonSign from 'components/Button/ArrowRight'

import './style.scss'

const FormSingupCompany = ({ onSignup }) => {
	const [formInformation, setFormInformation] = useMergeState({ firstname: '' })
	const [errors, setErrors] = useState({})
	const history = useHistory()

	const dataCountry = ['Lorem 1', 'Lorem 2', 'Lorem 3', 'Lorem 4']

	const handleOnChangeEmail = (e) => {
		setFormInformation({ [e.target.name]: e.target.value })
		if (validateEmail(e.target.value)) {
			setErrors({ ...errors, email: 'Invalid email address' })
		} else {
			setErrors({ ...errors, email: '' })
		}
	}

	const handleOnChange = (e) => {
		setFormInformation({ [e.target.name]: e.target.value })
	}

	const handleOnChangeCheckbox = (e) => {
		setFormInformation({ [e.target.name]: e.target.checked })
	}

	const handleOnSignup = () => {
		if (formInformation.agreeservice) {
			onSignup(formInformation)
		} else {
			setErrors({ ...errors, agreeservice: true })
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

const mapDispatchToProps = (dispatch) => ({
	onSignup: (informationUser) => dispatch(signup(informationUser)),
})

export default connect(null, mapDispatchToProps)(FormSingupCompany)
