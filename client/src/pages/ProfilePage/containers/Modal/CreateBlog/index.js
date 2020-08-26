import React, { useEffect } from 'react'
import { connect, useSelector } from 'react-redux'
import { Icon } from 'semantic-ui-react'
import Input from 'components/Input/Default'

import Select from '../../../../../components/Select/Default'
import Button from 'components/Button/Default'
import ButtonTransparent from 'pages/HomePage/components/Button/Transaparent'

import { fetchListCategoryIfNeeded } from 'redux/services/category'

import './style.scss'

const ModalCreateBlog = ({
	fetchListCategoryIfNeeded,
	handleShowModalBlog,
	createBlogData,
	coverFile,
	handleChangeCover,
	handleSaveBlog,
	handleChangeText,
}) => {
	useEffect(() => {
		fetchListCategoryIfNeeded()
	}, [fetchListCategoryIfNeeded])

	const listCategory = useSelector((state) => state.category.listCategory)
	const loading = useSelector((state) => state.blog.loadingCreateBlog)
	return (
		<div className='modal-create-blog'>
			<p className='modal-create-blog__title'>Create blog</p>
			<div className='modal-create-blog__form-blog'>
				<div className='modal-create-blog__form-blog__cover'>
					<img src={coverFile && URL.createObjectURL(coverFile)} alt='' />
					<label>
						<Icon name='camera' />
						<input type='file' name='cover' onChange={handleChangeCover} />
					</label>
				</div>
				<div className='modal-create-blog__form-blog__title'>
					<Input
						value={createBlogData.title}
						name='title'
						type='text'
						handleOnChange={handleChangeText}
						placeholder='Title'
					/>
				</div>
				<div className='modal-create-blog__form-blog__lastname'>
					<Select
						value={createBlogData.category}
						data={listCategory}
						handleOnChange={handleChangeText}
						placeholder='Category'
						name='category'
					/>
				</div>
				<div className='modal-create-blog__form-blog__actions'>
					<div className='p-05'>
						<ButtonTransparent
							text='CANCEL'
							fitWidth
							onClick={handleShowModalBlog}
						/>
					</div>
					<div className='p-05'>
						<Button
							name='SAVE BLOG'
							onClick={handleSaveBlog}
							loading={loading}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

const actionCreators = { fetchListCategoryIfNeeded }

export default connect(null, actionCreators)(ModalCreateBlog)
