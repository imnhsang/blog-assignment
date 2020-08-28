const express = require('express')
const router = express.Router()

// const firebase = require('firebase/app')
const db = require('../../configs/db')
const fire = require('../../configs/fire')

// @route     GET /users/:uid
// @desc      Get information user
// @access    Public
router.get('/:uid', async (req, res) => {
	const { uid } = req.params
	try {
		const snapshot = await db.collection('users').where('uid', '==', uid).get()

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
		console.log(error)

		res.status(500).send('Server error...')
	}
})

// @route     POST /users/update-profile
// @desc      Update information user
// @access    Public
router.post('/update-profile', async (req, res) => {
	try {
		const { uid, avatar, firstname, lastname, id, country, email } = req.body

		db.collection('users')
			.doc(id)
			.set({
				uid,
				avatar: avatar || '',
				firstname,
				lastname,
				country,
				email,
			})

		res.status(200).send({
			msg: 'Information updated successfully!!!',
		})
	} catch (err) {
		console.log(err)

		res.status(500).send('Server error...')
	}
})

module.exports = router
