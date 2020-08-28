import React from 'react'

import Input from 'components/Input/Default'
import Select from 'components/Select/Default'
import CheckBoxDefault from 'components/Input/Checkbox'
import ButtonSign from 'components/Button/ArrowRight'

import './style.scss'

const FormSingupIndividual = () => {
	const dataCountry = [
		{ title: 'Lorem 1' },
		{ title: 'Lorem 2' },
		{ title: 'Lorem 3' },
		{ title: 'Lorem 4' },
	]

	return (
		<div className='form-signup-company'>
			<div className='flex flex-column'>
				<div className='flex flex-wrap mb-05'>
					<div className=' mb-sm-05 col-sm-12 col-6 pr-sm-0 pr-075'>
						<Input placeholder='First name' name='firstname' type='text' />
					</div>
					<div className='col-sm-12 col-6 pl-sm-0 pl-075'>
						<Input placeholder='Last name' name='lastname' type='text' />
					</div>
				</div>

				<div className='mb-15'>
					<Select
						name='country'
						placeholder='Country (Training Location)'
						data={dataCountry}
					/>
				</div>

				<div className='mb-05'>
					<Input name='email' placeholder='Email address' type='text' />
				</div>
				<Input name='password' placeholder='Password' type='password' />
			</div>
			<div className='flex justify-between mb-1'>
				<CheckBoxDefault
					checked
					text='Yes! Send me genuinely useful email every now and then to help me get the moust out of lorem4skill'
				/>
			</div>
			<div className='flex justify-between mb-1'>
				<CheckBoxDefault
					name='agreeservice'
					text='Yes! I understand an agree to the lorem4skill terms of service'
				/>
			</div>
			<ButtonSign fluid name='GET STARTED' small />
			<span className='mt-1'>
				Already have an account?&nbsp;&nbsp;
				<span>Sign in</span>
			</span>
		</div>
	)
}

export default FormSingupIndividual
