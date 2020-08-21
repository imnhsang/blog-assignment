const express = require('express')
const router = express.Router()

const admin = require('firebase-admin')

// @route     GET /users/:uid
// @desc      Get information user
// @access    Public
router.get('/:uid', async (req, res) => {
	const { uid } = req.params
	try {
		const snapshot = await admin
			.firestore()
			.collection('users')
			.where('uid', '==', uid)
			.get()

		let users = []
		snapshot.forEach((doc) => {
			let id = doc.id
			let data = doc.data()

			users.push({ id, ...data })
		})

		if (users.length === 0) {
			res.status(400).send({
				errors: [
					{
						msg: 'User not exists',
					},
				],
			})
		}

		res.status(200).send({
			msg: 'Information User got successfully!!!',
			data: users[0],
		})
	} catch (error) {
		res.status(500).send('Server error...')
	}
})

module.exports = router
