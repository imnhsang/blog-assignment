import React from 'react'
import { Icon } from 'semantic-ui-react'
import Header from 'components/HeaderPage'
import Footer from 'components/FooterPage'
import SubscribePage from 'containers/CreateAccount'
import CoverBlog from 'components/CoverBlog'

import './style.scss'

import imageArticle from 'assets/images/background/home_quote.jpg'

const BlogDetailPage = () => {
	return (
		<div className='blog-detail-page'>
			<Header type='blog' />
			<CoverBlog unfeatured />
			<div className='blog-detail-page__content'>
				<div className='blog-detail-page__content__article'>
					<p className='font-black'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sequi
						ipsa, soluta, consequatur facilis corrupti vero culpa voluptas quod
						illo sunt voluptatem aliquam velit dolor sapiente? Illo tempore
						minus aliquid.
					</p>
					<img src={imageArticle} alt='' />
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sequi
						ipsa, soluta, consequatur facilis corrupti vero culpa voluptas quod
						illo sunt voluptatem aliquam velit dolor sapiente? Illo tempore
						minus aliquid.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sequi
						ipsa, soluta, consequatur facilis corrupti vero culpa voluptas quod
						illo sunt voluptatem aliquam velit dolor sapiente? Illo tempore
						minus aliquid.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sequi
						ipsa, soluta, consequatur facilis corrupti vero culpa voluptas quod
						illo sunt voluptatem aliquam velit dolor sapiente? Illo tempore
						minus aliquid.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sequi
						ipsa, soluta, consequatur facilis corrupti vero culpa voluptas quod
						illo sunt voluptatem aliquam velit dolor sapiente? Illo tempore
						minus aliquid.
					</p>
				</div>
				<div className='blog-detail-page__content__related-articles'>
					<p className='blog-detail-page__content__related-articles__title'>
						RELATED ARTICLES
					</p>
					<div className='blog-detail-page__content__related-articles__list-article'>
						<li>related longer post title goes here reaches second line</li>
						<li>related longer post title goes here reaches second line</li>
						<li>related longer post title goes here reaches second line</li>
					</div>
				</div>
				<SubscribePage
					title='WANT TO GET AHEAD OF THE REST?'
					subcription='Get tips and tricks for your company right in your inbox!'
					name='SUBSCRIBE'
				/>
				<div className='blog-detail-page__content__social'>
					<a href='/'>
						<Icon name='facebook f' />
					</a>
					<a href='/'>
						<Icon name='twitter' />
					</a>
				</div>
				<div className='blog-detail-page__content__list-categories'>
					<li>coaching</li>
					<li>finance</li>
					<li>leadership</li>
					<li>management</li>
					<li>marketing</li>
					<li>public speaking</li>
					<li>sales</li>
					<li>team building</li>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default BlogDetailPage
