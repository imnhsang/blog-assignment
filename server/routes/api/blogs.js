const express = require('express')
const router = express.Router()

const db = require('../../configs/db')

// @route     GET /api/blogs/list-blog
// @desc      Get all blog
// @access    Public
router.get('/list-blog', async (req, res) => {
	try {
		const snapshot = await db.collection('blogs').get()

		let blogs = []
		snapshot.forEach((doc) => {
			let id = doc.id
			let data = doc.data()

			blogs.push({ id, ...data })
		})

		res.status(200).send({
			msg: 'Blogs got successfully!!!',
			data: blogs,
		})
	} catch (error) {
		console.log(error)

		res.status(500).send('Server error...')
	}
})

// @route     GET /api/blogs/list-blog-by-category
// @desc      Get all blog
// @access    Public
router.get('/list-blog/:category', async (req, res) => {
	try {
		const { category } = req.params

		const snapshot = await db
			.collection('blogs')
			.where('category', '==', category)
			.get()

		let blogs = []
		snapshot.forEach((doc) => {
			let id = doc.id
			let data = doc.data()

			blogs.push({ id, ...data })
		})

		res.status(200).send({
			msg: 'Blogs got successfully!!!',
			data: blogs,
		})
	} catch (error) {
		console.log(error)

		res.status(500).send('Server error...')
	}
})

// @route     POST /api/blogs/create-blog
// @desc      Create blog
// @access    Public
router.post('/create-blog', async (req, res) => {
	try {
		const { uid, cover, title, category, created_at } = req.body

		db.collection('blogs')
			.add({
				uid,
				cover: cover || '',
				title,
				category,
				created_at,
			})

		res.status(200).send({
			msg: 'Blog created successfully!!!',
		})
	} catch (err) {
		console.log(err)

		res.status(500).send('Server error...')
	}
})

module.exports = router
