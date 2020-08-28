import React, { useEffect } from 'react'
import { connect, useSelector } from 'react-redux'
import { Icon, Modal } from 'semantic-ui-react'
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
	title,
	editBlog,
	loading,
}) => {
	useEffect(() => {
		fetchListCategoryIfNeeded()
	}, [fetchListCategoryIfNeeded])

	const listCategory = useSelector((state) => state.category.listCategory)
	return (
		<div className='modal-create-blog'>
			<Modal
				size='tiny'
				dimmer='blurring'
				open={true}
				onClose={handleShowModalBlog}
			>
				<Modal.Content>
					<p className='modal-create-blog__title'>{title}</p>
					<div className='modal-create-blog__form-blog'>
						<div className='modal-create-blog__form-blog__cover'>
							<img
								src={
									(coverFile && URL.createObjectURL(coverFile)) ||
									(createBlogData && createBlogData.cover)
								}
								alt=''
							/>
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
						{!editBlog && (
							<div className='modal-create-blog__form-blog__lastname'>
								<Select
									value={createBlogData.category}
									data={listCategory}
									handleOnChange={handleChangeText}
									placeholder='Category'
									name='category'
								/>
							</div>
						)}
						<div className='modal-create-blog__form-blog__actions'>
							<div className='p-05'>
								<ButtonTransparent
									text='CANCEL'
									fitWidth
									onClick={handleShowModalBlog}
									disabled={loading}
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
				</Modal.Content>
			</Modal>
		</div>
	)
}

const actionCreators = { fetchListCategoryIfNeeded }

export default connect(null, actionCreators)(ModalCreateBlog)
