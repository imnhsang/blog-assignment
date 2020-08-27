import React, { useEffect, useState } from 'react'
import { connect, useSelector } from 'react-redux'
import { Loader } from 'semantic-ui-react'
import { useLocation } from 'react-router-dom'
import Header from 'components/HeaderPage'
import Footer from 'components/FooterPage'
import SubscribePage from 'containers/CreateAccount'
import CoverBlog from 'components/CoverBlog'
import ArticleItem from 'components/Card/Article'
import Button from 'components/Button/TransparentArrowDown'
import ModalEditBlog from 'pages/ProfilePage/containers/Modal/CreateBlog'

import {
	fetchListBlogByCategoryIfNeeded,
	fetchListBlogByCategory,
	editBlog,
	removeBlog,
} from 'redux/services/blog'

import './style.scss'
import useMergeState from 'hooks/useMergeState'

const BlogCategoryPage = ({
	fetchListBlogByCategoryIfNeeded,
	fetchListBlogByCategory,
	editBlog,
	removeBlog,
}) => {
	const location = useLocation()
	const category = location.pathname.split('/')[2]

	useEffect(() => {
		fetchListBlogByCategoryIfNeeded(category)
	}, [fetchListBlogByCategoryIfNeeded, category])

	const listCategory = useSelector((state) => state.category.listCategory)
	const listBlogByCategory = useSelector(
		(state) => state.blog.listBlogByCategory
	)

	const handleLoadMoreArticle = () => {
		fetchListBlogByCategory(category)
	}

	const categoryData =
		listCategory && listCategory.find((e) => e.id === category)

	const [openModalEditBlog, setOpenModalEditBlog] = useState(false)
	const [updateBlogData, setUpdateBlogData] = useMergeState({
		category,
		isSave: false,
	})
	const [coverFile, setCoverFile] = useState(null)

	const handleShowModalEditBlog = (item) => {
		setOpenModalEditBlog(!openModalEditBlog)
		setCoverFile(null)
		if (!openModalEditBlog) {
			const { id, created_at, cover, title } = item
			setUpdateBlogData({ id, created_at, cover, title })
		} else {
			setUpdateBlogData({})
		}
	}

	const handleChangeCover = (e) => {
		setCoverFile(e.target.files[0])
	}

	const handleChangeTextBlog = (e) => {
		setUpdateBlogData({ [e.target.name]: e.target.value, isSave: true })
	}

	const handleSaveBlog = async () => {
		if (coverFile || updateBlogData.isSave) {
			if (await editBlog(coverFile, updateBlogData)) {
				handleShowModalEditBlog()
			}
		}
	}

	const handleDeleteBlog = (item) => {
		removeBlog(item)
	}

	const loadingUpdateBlog = useSelector((state) => state.blog.loadingUpdateBlog)
	const loadingGetBlog = useSelector(
		(state) => state.blog.loadingGetBlogByCategory
	)

	return (
		<div className='blog-category-page'>
			<Header type='blog' />
			<CoverBlog unfeatured category={categoryData && categoryData.title} />

			{openModalEditBlog && (
				<ModalEditBlog
					title='Edit blog'
					createBlogData={updateBlogData}
					coverFile={coverFile}
					handleShowModalBlog={handleShowModalEditBlog}
					handleChangeCover={handleChangeCover}
					handleSaveBlog={handleSaveBlog}
					handleChangeText={handleChangeTextBlog}
					editBlog
					loading={loadingUpdateBlog}
				/>
			)}

			<div className='items-center flex flex-column mb-3 mt-4'>
				<div className='blog-category-page__list-article'>
				
					{listBlogByCategory[category] &&
						listBlogByCategory[category].data.length !== 0 ?
						listBlogByCategory[category].data.map((e, inx) => (
							<div
								key={inx}
								className='col-4 col-lg-6 col-sm-12 p-15 py-sm-1 p-sm-0'
							>
								<ArticleItem
									openModalEditBlog={openModalEditBlog}
									handleDeleteBlog={handleDeleteBlog}
									handleShowModalBlog={handleShowModalEditBlog}
									item={e}
									category={categoryData && categoryData.title}
								/>
							</div>
						)) : !loadingGetBlog && (
              <p className='blog-category-page__list-article--empty'>
                No have any blog.
              </p>
            )}

				</div>
        <Loader active={loadingGetBlog} inline='centered' />
				{listBlogByCategory[category] &&
					listBlogByCategory[category].isLoadMore && (
						<Button text='MORE ARTICLES' onClick={handleLoadMoreArticle} />
					)}
			</div>

			<SubscribePage
				title='WANT TO GET AHEAD OF THE REST?'
				subcription='Get tips and tricks for your company right in your inbox!'
				name='SUBSCRIBE'
			/>
			<Footer />
		</div>
	)
}

const actionCreators = {
	fetchListBlogByCategoryIfNeeded,
	fetchListBlogByCategory,
	editBlog,
	removeBlog,
}
export default connect(null, actionCreators)(BlogCategoryPage)
