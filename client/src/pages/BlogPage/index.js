import React from 'react'

import Header from 'components/HeaderPage'
import Footer from 'components/FooterPage'
import SubscribePage from 'containers/CreateAccount'
import CoverBlog from 'components/CoverBlog'
// import ArticleItem from 'components/Card/Article'
// import Button from 'components/Button/TransparentArrowDown'

import './style.scss'

const BlogPage = () => {
	return (
		<div className='blog-page'>
			<Header type='blog' />
			<CoverBlog />
			<div className='items-center flex flex-column mb-3'>
				<div className='blog-page__title-list-article'>LATEST ARTICLES</div>
				{/* <div className='blog-page__list-article-featured '>
					<div className='col-4 col-lg-6 col-sm-12 p-15 py-sm-1 p-sm-0'>
						<ArticleItem />
					</div>
					<div className='col-4 col-lg-6 col-sm-12 p-15 py-sm-1 p-sm-0'>
						<ArticleItem />
					</div>
					<div className='col-4 col-lg-6 col-sm-12 p-15 py-sm-1 p-sm-0'>
						<ArticleItem />
					</div>
					<div className='col-4 col-lg-6 col-sm-12 p-15 py-sm-1 p-sm-0'>
						<ArticleItem />
					</div>
					<div className='col-4 col-lg-6 col-sm-12 p-15 py-sm-1 p-sm-0'>
						<ArticleItem />
					</div>
					<div className='col-4 col-lg-6 col-sm-12 p-15 py-sm-1 p-sm-0'>
						<ArticleItem />
					</div>
				</div> */}
				{/* <Button text='MORE ARTICLES' /> */}
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

export default BlogPage
