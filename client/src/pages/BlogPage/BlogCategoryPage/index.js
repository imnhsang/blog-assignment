import React, { useEffect } from 'react'
import { connect, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import Header from 'components/HeaderPage'
import Footer from 'components/FooterPage'
import SubscribePage from 'containers/CreateAccount'
import CoverBlog from 'components/CoverBlog'
import ArticleItem from 'components/Card/Article'
import Button from 'components/Button/TransparentArrowDown'

import {
	fetchListBlogByCategoryIfNeeded,
	fetchListBlogByCategory,
} from 'redux/services/blog'

import './style.scss'

const BlogCategoryPage = ({
	fetchListBlogByCategoryIfNeeded,
	fetchListBlogByCategory,
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
	return (
		<div className='blog-category-page'>
			<Header type='blog' />
			<CoverBlog unfeatured category={categoryData && categoryData.title} />

			<div className='items-center flex flex-column mb-3 mt-4'>
				<div className='blog-category-page__list-article'>
					{listBlogByCategory[category] &&
						listBlogByCategory[category].data.map((e, inx) => (
							<div
								key={inx}
								className='col-4 col-lg-6 col-sm-12 p-15 py-sm-1 p-sm-0'
							>
								<ArticleItem
									item={e}
									category={categoryData && categoryData.title}
								/>
							</div>
						))}
				</div>
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
}
export default connect(null, actionCreators)(BlogCategoryPage)
