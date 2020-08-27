const express = require('express')
const router = express.Router()

const db = require('../../configs/db')
const fire = require('../../configs/fire')
// @route     GET /api/blogs/list-blog
// @desc      Get all blog
// @access    Public
router.get('/list-blog', async (req, res) => {
	try {
		const snapshot = await db.collection('blogs').limit(6).get()

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
router.get('/list-blog/:category/:page', async (req, res) => {
	try {
		const { category, page } = req.params

		const snapshotCurrent = await db
			.collection('blogs')
			.where('category', '==', category)
			.limit(page * 6)
			.get()

		let blogsCurrent = []
		snapshotCurrent.forEach((doc) => {
			let id = doc.id
			let data = doc.data()

			blogsCurrent.push({ id, ...data })
		})

		const snapshotNext = await db
			.collection('blogs')
			.where('category', '==', category)
			.limit(page * 6 + 1)
			.get()

		let blogsNext = []
		snapshotNext.forEach((doc) => {
			let id = doc.id
			let data = doc.data()

			blogsNext.push({ id, ...data })
		})

		res.status(200).send({
			msg: 'Blogs got successfully!!!',
			data: {
				listBlog: blogsCurrent,
				isLoadMore: !(blogsNext.length === blogsCurrent.length),
			},
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
			.then((docRef) => {
				res.status(200).send({
					msg: 'Blog created successfully!!!',
					data: {
						id: docRef.id,
						uid,
						cover,
						title,
						category,
						created_at,
					},
				})
			})
	} catch (err) {
		console.log(err)

		res.status(500).send('Server error...')
	}
})

// @route     POST /api/blogs/create-blog
// @desc      Edit blog
// @access    Public
router.post('/edit-blog', async (req, res) => {
	try {
		const { id, uid, cover, title, category, created_at } = req.body

		db.collection('blogs').doc(id).set({
			uid,
			cover,
			title,
			category,
			created_at,
		})

		res.status(200).send({
			msg: 'Blog edited successfully!!!',
			data: {
				id,
				uid,
				cover,
				title,
				category,
				created_at,
			},
		})
	} catch (err) {
		console.log(err)

		res.status(500).send('Server error...')
	}
})

// @route     POST /api/blogs/remove-blog
// @desc      Delete blog
// @access    Public
router.post('/remove-blog', async (req, res) => {
	try {
		const { id } = req.body

		fire.firestore().collection('blogs').doc(id).delete()

		res.status(200).send({
			msg: 'Blog edited successfully!!!',
			data: {
				id,
			},
		})
	} catch (err) {
		console.log(err)

		res.status(500).send('Server error...')
	}
})

module.exports = router
