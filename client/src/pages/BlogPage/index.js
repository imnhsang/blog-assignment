import React, { useEffect } from 'react'
import { useSelector, connect } from 'react-redux'
import { Loader } from 'semantic-ui-react'

import Header from 'components/HeaderPage'
import Footer from 'components/FooterPage'
import SubscribePage from 'containers/CreateAccount'
import CoverBlog from 'components/CoverBlog'
import ArticleItem from 'components/Card/Article'
import Button from 'components/Button/TransparentArrowDown'

import { fetchListBlog } from 'redux/services/blog'

import './style.scss'

const BlogPage = ({ fetchListBlog }) => {
	useEffect(() => {
		fetchListBlog()
	}, [fetchListBlog])

	const loadingGetBlog = useSelector((state) => state.blog.loadingGetBlog)
	const listBlog = useSelector((state) => state.blog.listBlog)

	const handleLoadMoreArticle = () => {
		fetchListBlog()
	}

	return (
		<div className='blog-page'>
			<Header type='blog' />
			<CoverBlog />
			<div className='items-center flex flex-column mb-3'>
				<div className='blog-page__title-list-article'>LATEST ARTICLES</div>
				<div className='blog-page__list-article-featured '>
					{JSON.stringify(listBlog) !== '{}' &&
						listBlog.data.map((e, inx) => (
							<div
								key={inx}
								className='col-4 col-lg-6 col-sm-12 p-15 py-sm-1 p-sm-0'
							>
								<ArticleItem item={e} />
							</div>
						))}
				</div>
				<Loader active={loadingGetBlog} inline='centered' />
				{listBlog && listBlog.isLoadMore && (
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
	fetchListBlog,
}

export default connect(null, actionCreators)(BlogPage)
