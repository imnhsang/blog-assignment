const express = require('express')
const router = express.Router()

const admin = require('firebase-admin')

// @route     GET /api/categories
// @desc      Get all categories
// @access    Public
router.get('/', async (req, res) => {
	try {
		const snapshot = await admin.firestore().collection('categories').get()

		let categories = []
		snapshot.forEach((doc) => {
			let id = doc.id
			let data = doc.data()

			categories.push({ id, ...data })
		})

		res.status(200).send({
			msg: 'Categories got successfully!!!',
			data: categories,
		})
	} catch (error) {
		res.status(500).send('Server error...')
	}
})

module.exports = router
