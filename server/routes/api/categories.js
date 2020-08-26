const express = require('express')
const router = express.Router()

const db = require('../../configs/db')

// @route     GET /api/categories
// @desc      Get all categories
// @access    Public
router.get('/', async (req, res) => {
	try {
		const snapshot = await db.collection('categories').get()
		// const snapshot = await admin.firestore().collection('categories').get()

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
    console.log(error)
    
		res.status(500).send('Server error...')
	}
})

module.exports = router
